import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  usersData: Array<Data> = [
    {
      id: 1,
      name: 'abc',
      age: 45,
      email: 'hded@dncjdn.co',
      image:
        'https://th.bing.com/th/id/OIP._6kSqsTmX5o4yeSjGnw48AHaLH?pid=ImgDet&rs=1',
      gender: 'other',
      designation: 'Desiner',
    },
    {
      id: 2,
      name: 'xyz',
      age: 56,
      email: 'ed@ddn.in',
      image:
        'https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/SmileModifiedKRAK.jpg',
      gender: 'male',
      designation: 'Developer',
    },
  ];
  deletedData: Array<Data> = [];

  constructor() {}
  addUser(user: Data, f: NgForm) {
    this.usersData.push(user);
    console.log(this.usersData);
    f.resetForm();
  }
  updateUser(user: Data, initialId: number) {
    console.log('user:', user);
    console.log('initialId:', initialId);
    let index = this.usersData.map((u) => u.id).indexOf(initialId);
    this.usersData[index].id = user.id;
    this.usersData[index].name = user.name;
    this.usersData[index].age = user.age;
    this.usersData[index].email = user.email;
    this.usersData[index].image = user.image;
    this.usersData[index].gender = user.gender;
    this.usersData[index].designation = user.designation;
    console.log('usersdata', this.usersData);
  }
  deleteUser(id: number) {
    let index = this.usersData.map((u) => u.id).indexOf(id);
    // console.log(index)
    this.deletedData.push(this.usersData[index]);
    this.usersData.splice(index, 1);
    // console.log(this.deletedData)
    // console.log(this.usersData)
  }
}

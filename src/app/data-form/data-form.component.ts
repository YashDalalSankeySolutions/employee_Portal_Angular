import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';
import { Data } from '../model/data';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {
  gender: any;
  // user:Data;
  constructor(private usersDataService:UsersDataService){
  }
  onSubmit(form:NgForm){
    let user ={
      id:form.value.empId,
      name:form.value.name,
      age:form.value.age,
      email:form.value.email,
      image:form.value.image,
      gender:form.value.gender,
      designation:form.value.designation,
    }
    // console.log(form.value)
    this.usersDataService.addUser(user,form);
    // console.log(form.value.gender)
  }
  getValue(field:NgModel){
    // console.log(field)
  }
  clearData(form:NgForm){
    form.resetForm()
  }
}

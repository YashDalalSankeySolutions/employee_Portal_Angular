import { Component, Input } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { NgControl } from '@angular/forms';
import { Data } from '../model/data';

@Component({
  selector: 'tr[app-data-table-row]',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.css'],
})
export class DataTableRowComponent {
  @Input() user: Data;
  
  isEditing: boolean = false;
  initialId: number;
  updatedUserDetails: Data;
  validFields: any = {
    id: true,
    name: true,
    age: true,
    email: true,
    image: true,
    gender: true,
    designation: true,
  };
  constructor(private usersDataService: UsersDataService) {
    // console.log('user -> ', this.user)
  }

  ngOnInit() {
    // console.log('user -> ', this.user)
    this.updatedUserDetails = {
      id: this.user.id,
      name: this.user.name,
      age: this.user.age,
      email: this.user.email,
      image: this.user.image,
      gender: this.user.gender,
      designation: this.user.designation,
    };
    // this.initialId=this.user.id
    // console.log("innit",this.updatedUserDetails)
  }
  edit() {
    // console.log("userUpda",this.updatedUserDetails)
    // console.log("usssser",this.user)
    this.initialId = this.user.id;
    this.isEditing = true;
  }
  save() {
    // console.log("data id", this.updatedUserDetails)
    this.usersDataService.updateUser(this.updatedUserDetails, this.initialId);
    this.isEditing = false;
  }
  deleteuser(id: number) {
    this.usersDataService.deleteUser(id);
  }
  cancel() {
    this.updatedUserDetails = this.user;
    // console.log("cancel")
    // console.log("userUpda_cancel",this.updatedUserDetails)
    // console.log("usssser_cancel",this.user)

    this.isEditing = false;
  }
  getValue(field: NgControl) {
    // console.log(field)
    // console.log(this.updatedUserDetails.id)
  }
  isValidDetails() {
    let res =
      this.validFields.id &&
      this.validFields.name &&
      this.validFields.age &&
      this.validFields.email &&
      this.validFields.gender &&
      this.validFields.designation;
    // console.log("res",res)
    return res;
  }
  validate_id(id: NgControl) {
    // console.log(id)
    this.validFields.id = id.valid;
  }
  validate_name(name: NgControl) {
    this.validFields.name = name.valid;
  }
  validate_age(age: NgControl) {
    this.validFields.age = age.valid;
  }
  validate_email(email: NgControl) {
    // console.log(email.valid)
    this.validFields.email = email.valid;
  }
  validate_gender(gender: NgControl) {
    // console.log(gender.value)
    this.validFields.gender = gender.valid;
  }
  validate_designation(designation: NgControl) {
    // console.log(designation.value)
    this.validFields.designation = designation.valid;
  }
}

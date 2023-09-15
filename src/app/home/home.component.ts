import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usersDataLength:number
  constructor(private userDataService:UsersDataService){

  }
  ngOnInit(){
    this.usersDataLength = this.userDataService.usersData.length
  }

}

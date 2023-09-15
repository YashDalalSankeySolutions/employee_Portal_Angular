import { Component } from '@angular/core';
import { Data } from '../model/data';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  
  usersdata:Array<Data>
  
  constructor(private usersDataService:UsersDataService){
    this.usersdata = usersDataService.usersData
  }
}

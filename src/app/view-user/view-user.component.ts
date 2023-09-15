import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { Data } from '../model/data';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  id:any
  user:Data | undefined
  isUserValid:boolean=true;
  constructor(private route: ActivatedRoute,private usersDataservice:UsersDataService){
  }
  ngOnInit(){
    this.route.paramMap.subscribe(value=>{
      // console.log(value)
      this.id = value.get('id');
      // console.log(typeof(this.id))
      // console.log(this.usersData.usersData)
      this.user = this.usersDataservice.usersData.find(u => u.id === +this.id)
      // console.log("user",this.user)
      if(this.user===undefined) this.isUserValid=false

    })
  }
  
}

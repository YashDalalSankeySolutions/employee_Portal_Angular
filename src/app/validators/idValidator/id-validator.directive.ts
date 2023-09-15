import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS ,AbstractControl,Validator} from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';

@Directive({
  selector: '[appIdValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:IdValidatorDirective,
    multi:true
  }]
  
})
export class IdValidatorDirective implements Validator {
  @Input('appIdValidator') initialId:any;
  validate(control:AbstractControl) : {[key:string]:any} | null{
    // console.log("lllll",typeof(this.initialId))
    // console.log("ininini:",this.initialId)
    // console.log("connnnn:",control.value)

    if(this.initialId==control.value) return null
    let userDataResult = this.userDataService.usersData.find(u=>u.id === control.value)
    let deletedDataResult = this.userDataService.deletedData.find(u=>u.id === control.value)
    // console.log("Ures",userDataResult)
    // console.log("Dres",deletedDataResult)
    if(userDataResult !== undefined || deletedDataResult !== undefined){
      return {"inValidId":true}
    }
    return null
  }
  constructor(private userDataService: UsersDataService) { }

}

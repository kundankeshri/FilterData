import { Component ,OnInit} from '@angular/core';
import { Router }            from '@angular/router';
import {LoginComponentService} from './app.LoginComponentService';
@Component({
  selector: 'login-app',
  templateUrl: './app.LoginComponent.html',
  providers: [LoginComponentService]
})
export class LoginComponent implements OnInit{
  title : any ;

  constructor (private router: Router, private dataservice : LoginComponentService){

  }
  onSubmit(username, password) {
   if(username == 'admin' && password == 'admin'){
     this.router.navigate(['/searchFilter']);
   }else{
     alert("Please provide valid UserName And Password");
   }
  }

    ngOnInit():void{
  //  this.title = this.dataservice.getName();

    //  this.dataservice.getDetails().then(result  => {
      //   this.title = result[0].name;
  //});

}
}

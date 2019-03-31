import { Component } from '@angular/core';


@Component({
    templateUrl: './sign-up.component.html',
})
export class SignUpComponent{

    firstName = '';
    lastName = '';
    email = '';
    password = '';

    constructor() { }
    signUp():void{
        const newUser = {
            firstName:this.firstName,
            lastName:this.lastName, 
            email:this.email, 
            password:this.password, 
        };
        if (newUser.firstName && newUser.lastName && newUser.email && newUser.password){
            console.log(newUser);
        }else{
            console.log('BOOO');
        }        
        console.log(newUser);
    }
}

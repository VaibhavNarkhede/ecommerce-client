import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    firstName = ''
    lastName = ''
    email = ''
    address = ''
    mobile = ''
    password = ''

    constructor(
        private router: Router,
        private service: UserService
        
    ) { }

    ngOnInit() { }

    onRegiter() {
        if(this.firstName.length === 0) {
            alert('enter first name')
        } else if (this.lastName.length === 0) {
            alert('enter last name')
        } else if (this.email.length === 0) {
            alert('enter email')
        } else if (this.address.length === 0) {
            alert('enter address')
        } else if (this.mobile.length === 0) {
            alert('enter mobile number')
        } else if (this.password.length === 0) {
            alert('enter password')
        } else {
            this.service
                .signup(this.firstName,this.lastName,this.email,this.address,this.mobile,this.password)
                .subscribe(result => {
                    if(result['status'] === 'success') {                       
                        alert('user registred successfully')                       
                        this.router.navigate(['/auth/signin'])
                    } else {
                        alert(result['error'])
                    }
                })
        }

    }

    onCancel() {
        this.router.navigate(['/auth/signin'])
    }
}
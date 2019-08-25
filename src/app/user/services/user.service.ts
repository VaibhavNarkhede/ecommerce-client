import { Injectable } from '@angular/core';
//import { Http } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from '../../config.service'

@Injectable()
export class UserService {

    url = ''

    constructor(
        private configService: ConfigService,
        private http: HttpClient 
    ) {
        this.url =  this.configService.getConfiguration().url + '/user'
    }

    signin(email: string, password: string) {

        const body = {           
            email: email,
            password: password     
        }  
        return this.http.post(this.url + '/signin', body)
    }

    signup(firstName: string, lastName: string, email: string, address: string, mobile: string, password: string) {
        const body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            mobile: mobile,
            password: password     
        }       
        return this.http.post(this.url + '/signup', body)
    }
}
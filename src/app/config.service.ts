import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {

    constructor() { }

    getConfiguration() {
       return {
           url: environment.baseUrl
       } 
    }
}
import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        UserRoutingModule
    ],
    exports: [],
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    providers: [
        UserService
    ],
})
export class UserModule { }

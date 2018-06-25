import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication.routing.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PasswordEqualValidator } from '../utils/password-equal-validator.directive';
import { ErrorAlertComponent } from '../shared/error-alert/error-alert.component';

/**
 * Services
 */
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        SignupComponent,
        LoginComponent,
        PasswordEqualValidator,
        ErrorAlertComponent
    ],
    providers: [
        AuthenticationService,
        UserService
    ]
})
export class AuthenticationModule { }

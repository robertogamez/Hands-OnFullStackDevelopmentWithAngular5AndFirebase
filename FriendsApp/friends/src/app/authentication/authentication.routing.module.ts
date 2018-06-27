import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'; 

export const routes: Routes = [
    {
        path: 'app-friends-signup',
        component: SignupComponent
    },
    {
        path: 'app-friends-login',
        component: LoginComponent
    }
];

/**
 * Authentication Routing Module
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule { }

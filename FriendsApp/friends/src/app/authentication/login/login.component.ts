import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errorMesage: string;
    showError: boolean;
    private user: User;

    constructor(
        private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private angularFireAuth: AngularFireAuth
    ) {
        this.angularFireAuth.auth.onAuthStateChanged(user => {
            if (user) {
                this.getUserInfo(user.uid);
            }
        });
    }

    onLogin(loginFormData): void {
        this.authService.login(loginFormData.value.email, loginFormData.value.password)
            .then((user) => {
                // Login user
                const uid: string = user.uid;
                this.getUserInfo(uid);
                console.log('Get User info: ');
                console.log(user);
            }).catch((error) => {
                this.errorMesage = error.message;
                this.showError = true;
            });
    }

    private getUserInfo(uid: string) {
        this.userService.getUser(uid).subscribe(userInfo => {
            this.user = userInfo;
        }, error => {
            console.log('Error: ');
            console.log(error);
        });
    }

    onReset(resetFormData): void {
        this.authService.resetPassword(resetFormData.value.email).then(() => {
            alert('Reset instruction sent your email');
        }).catch((error) => {
            this.errorMesage = error.message;
            this.showError = true;
        });
    }

    ngOnInit() {
    }

}

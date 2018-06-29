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
                const userVM = this.getUserFireBaseToUser(user);
                this.getUserInfo(userVM);
            }
        });
    }

    onLogin(loginFormData): void {
        this.authService.login(loginFormData.value.email, loginFormData.value.password)
            .then((user) => {
                // Login user
                const userVM = this.getUserFireBaseToUser(user);
                this.getUserInfo(userVM);
            }).catch((error) => {
                this.errorMesage = error.message;
                this.showError = true;
            });
    }

    private getUserFireBaseToUser(user: any) {
        const userVM = new User(
            user.email,
            user.displayName,
            user.phoneNumber,
            user.uid,
            0,
            user.photoURL
        );

        return userVM;
    }

    private getUserInfo(user: User) {
        this.user = user;
        this.userService.saveUser(this.user);
        console.log(this.user);
        this.navigateToUserProfile();
    }

    private navigateToUserProfile() {
        this.router.navigateByUrl('/app-friends-userprofile');
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

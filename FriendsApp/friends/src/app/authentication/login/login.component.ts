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
                this.getUserInfo(user.uid);
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

    privateGetUserInfoFireBase(uid: string) {
        this.userService.getUser(uid).subscribe(snapshot => {
            console.log('User snapshot: ', snapshot);
        });
    }

    private getUserInfo(uid: string) {
        this.userService.getUser(uid).subscribe(snapshot => {
            this.user = snapshot;
            this.userService.saveUser(this.user);
            this.navigateToUserProfile();
        });
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

import {
    Component,
    OnInit,
    Directive,
    Attribute,
    forwardRef
} from '@angular/core';

import {
    Validator,
    AbstractControl,
    NG_VALIDATORS
} from '@angular/forms';

import {
    AuthenticationService
} from '../../services/authentication.service';
import {
    UserService
} from '../../services/user.service';
import {
    User
} from '../../services/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    errorMessage: string;
    showError: boolean;

    constructor(
        private authService: AuthenticationService,
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    onSingUp(signupFormData): void {
        this.authService.signup(signupFormData.value.email, signupFormData.value.password)
            .then((userInfo) => {
                // Register the new user
                const user = new User(
                    signupFormData.value.email,
                    signupFormData.value.name,
                    signupFormData.value.mobile,
                    userInfo.uid,
                    0,
                    ''
                );

                this.writeNewUser(user);

            }).catch((error) => {
                this.showError = true;
                this.errorMessage = error.message;
            });
    }

    private writeNewUser(user: User): void {
        this.userService.addUser(user);
    }

}

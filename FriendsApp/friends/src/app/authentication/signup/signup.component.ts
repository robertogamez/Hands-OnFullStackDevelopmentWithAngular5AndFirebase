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

@Directive({
    selector: '[passwordEqual][formControlName], [passwordEqual][formControl], [passwordEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordEqualValidator), multi: true }
    ]
})
export class PasswordEqualValidator extends Validator {

    constructor(@Attribute('passwordEqual') public passwordEqual: string) {
    }

    validate(control: AbstractControl): { [key: string]: any } {
        let retypePassword = control.value;
        let originalPassword = control.root.get(this.passwordEqual);

        // original & retype password is equal
        return (originalPassword && retypePassword !==
            originalPassword.value)
            ? { passwordEqual: false } : null;
    }

}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

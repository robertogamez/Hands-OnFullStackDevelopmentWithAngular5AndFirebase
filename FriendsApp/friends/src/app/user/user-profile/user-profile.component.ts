import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    profileImage: any = '../../../assets/images/person_edit.png';
    user: User;

    @ViewChild(EditDialogComponent) editDialog;

    constructor(
        private authService: AuthenticationService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
    }

    onLogout(): void {
        this.authService.signout().then(() => {
            this.navigateToLogin();
        })
    }

    navigateToLogin() {
        this.router.navigateByUrl('/app-friends-login');
    }

}

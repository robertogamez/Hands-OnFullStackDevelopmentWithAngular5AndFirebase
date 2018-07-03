import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { AuthenticationGuard } from '../services/authentication.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        UserProfileComponent,
        EditDialogComponent
    ],
    providers: [
        AuthenticationGuard
    ]
})
export class UserModule { }

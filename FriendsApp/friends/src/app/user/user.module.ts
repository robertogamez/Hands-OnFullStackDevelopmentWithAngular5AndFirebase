import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { AuthenticationGuard } from '../services/authentication.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';

import { FriendService } from '../services/friend.service';

import { FriendsdatePipe } from '../utils/friendsdate.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        UserProfileComponent,
        EditDialogComponent,
        UserFriendsComponent,
        FriendsdatePipe
    ],
    providers: [
        AuthenticationGuard,
        FriendService
    ]
})
export class UserModule { }

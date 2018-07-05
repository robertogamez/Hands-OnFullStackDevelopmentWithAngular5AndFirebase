import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { Friend } from '../../services/friend';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user';
import 'firebase/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-friends',
    templateUrl: './user-friends.component.html',
    styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {

    friends: Friend[];
    totalCount: number;
    pageSize = 3;
    currentCount = 0;
    previousCount = 0;
    isLeftVisible = false;
    isRightVisible = true;
    user: User;

    constructor(
        private friendService: FriendService,
        private userService: UserService
    ) { }

    ngOnInit() {
    }

}

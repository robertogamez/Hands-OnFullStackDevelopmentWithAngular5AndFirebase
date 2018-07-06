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
        this.user = this.userService.getSavedUser().getValue();
        this.totalCount = this.user.friendcount;
        this.friendService.getFirstPage(this.user.uid, this.pageSize)
            .subscribe(friends => {
                this.friends = friends;
                const count: number = this.friends.length;
                this.currentCount = count;
                this.leftArrowVisible();
                this.rightArrowVisible();
            });
    }

    onLeft(): void {
        this.previous();
    }

    onRight(): void {
        this.next();
    }

    next() {
        this.friendService.loadNextPage(
            this.user.uid,
            this.friends[this.friends.length - 1].uid,
            this.pageSize
        ).subscribe(friends => {
            this.friends = friends;
            const count: number = this.friends.length;
            this.previousCount = count - 1;
            this.currentCount += this.previousCount;
            this.leftArrowVisible();
            this.rightArrowVisible();
        });
    }

    previous() {
        this.friendService.loadPreviousPage(this.user.uid,
            this.friends[0].uid,
            this.pageSize).subscribe(friends => {
                this.friends = friends;
                const count: number = this.friends.length;
                this.currentCount -= this.previousCount;
                this.leftArrowVisible();
                this.rightArrowVisible();
            });
    }

    leftArrowVisible(): void {
        this.isLeftVisible = this.currentCount > this.pageSize;
    }

    rightArrowVisible(): void {
        this.isRightVisible = this.totalCount > this.currentCount;
    }

}

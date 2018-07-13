import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessagingService } from '../../services/messaging.service';
import { Message } from '../../services/message';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-chat-message-form',
    templateUrl: './chat-message-form.component.html',
    styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent implements OnInit {

    @Input() friendUid: string;
    uid: string;
    newMessage: string;

    constructor(
        private messageService: MessagingService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.uid = this.userService.getSavedUser().getValue().uid;
    }

    sendMessage() {
    }

}

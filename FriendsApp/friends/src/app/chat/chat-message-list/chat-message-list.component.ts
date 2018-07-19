import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    AfterViewChecked,
    ChangeDetectorRef,
    Input
} from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessagingService } from '../../services/messaging.service';
import { User } from '../../services/user';
import { Message } from '../../services/message';


@Component({
    selector: 'app-chat-message-list',
    templateUrl: './chat-message-list.component.html',
    styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {

    @Input() friendUid: string;
    @ViewChild("scrollContainer") private scrollContainer: ElementRef;

    private user: User;
    messages: Message[];
    key: string;

    constructor(
        private messageService: MessagingService,
        private userService: UserService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
        this.messageService.isMessagePresent(this.user.uid, this.friendUid)
            .subscribe(snapshot => {
                if (snapshot === null) {
                    console.log('Message is empty');
                    this.key = this.messageService.freshlyCreateChatIDEntry(
                        this.user.uid,
                        this.friendUid
                    );
                } else {
                    this.key = snapshot.key;
                }

                this.messageService.setKey(this.key);
                this.subscribeMessages();
            });
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
        this.cdRef.detectChanges();
    }

    scrollToBottom() {
        try {
            this.scrollContainer.nativeElement.scrollTop
                = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) {
            console.log('Error');
        }
    }

    subscribeMessages() {
        this.messageService.getMessages(this.key).subscribe(messages => {
            this.messages = messages;
        });
    }

}

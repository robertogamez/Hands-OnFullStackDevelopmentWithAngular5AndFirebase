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


@Component({
    selector: 'app-chat-message-list',
    templateUrl: './chat-message-list.component.html',
    styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {

    @Input() friendUid: string;
    @ViewChild("scrollContainer") private scrollContainer: ElementRef;

    constructor(
        private messageService: MessagingService,
        private userService: UserService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
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

}

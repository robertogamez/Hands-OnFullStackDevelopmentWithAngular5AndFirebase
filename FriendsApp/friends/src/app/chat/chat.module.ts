import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChatRoutingModule } from './chat-routing.module';

import { UserService } from '../services/user.service';

import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent,
        ChatMessageComponent,
        ChatMessageListComponent,
        ChatMessageFormComponent
    ],
    providers: [
        UserService
    ]
})
export class ChatModule { }

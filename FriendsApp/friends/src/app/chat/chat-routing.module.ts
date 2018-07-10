import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

export const routes: Routes = [
    {
        path: 'app-friends-chat/:id',
        component: ChatComponent
    }
];

/**
 * Chat Routing Module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication.routing.module';

/**
 * Services
 */
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [],
  providers: [
      AuthenticationService,
      UserService
  ]
})
export class AuthenticationModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

import { AppRouting } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        AuthenticationModule,
        AppRouting
    ],
    providers: [
        AngularFireAuth,
        AngularFireDatabase
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

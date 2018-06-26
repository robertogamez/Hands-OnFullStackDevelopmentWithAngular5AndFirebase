import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-friends',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    authenticacionService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this.authenticacionService = authService;
        console.log(this.authenticacionService);
    }
}

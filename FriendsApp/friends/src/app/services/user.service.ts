import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'firebase/storage';
import { USERS_CHILD } from './database-constants';
import { User } from './user';
import { Observable } from 'rxjs/Observable';


/**
 * User Service
 */
@Injectable()
export class UserService {

    /**
     * Constructor
     * @param {AngularFireDatabase} fireDb provides the functionality for Firebase Database
     */
    constructor(private fireDb: AngularFireDatabase) { }

    public addUser(user: User): void {
        this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
    }

    public getUser(uid: string): Observable<User> {
        const element = this.fireDb.object<User>(`${USERS_CHILD}/${uid}`).valueChanges();
        return element;
    }

}

import { Component, OnInit } from '@angular/core';
// Inject your Firebase Auth service in your app component.
import { AuthGuard } from './shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user = null;

    // Inject the AngularFireDatabase into the component’s constructor.
    constructor( ) {

    }

    ngOnInit() {
      // this.auth.getAuthState().subscribe(
      // (user) => this.user = user);
    }

    // loginWithFacebook() {
    //   this.auth.loginWithFacebook();
    // }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {

  }
  
  /**
   * canActivate decides if a designated route can be accessed, such as our /members component. It's checking authentication from an AngularFireAuth observable. 
   * If it's not authenticated (!authenticated), then they're denied and directed back to /login .
   */
  canActivate(): Observable<boolean> {
    return Observable.from(this.auth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
          if (!authenticated) {
            this.router.navigate([ '/login' ]);
          }
      });
  }

    // getAuthState() {
    //   return this.authState;
    // }

    // /**
    //  * Login with Facebook
    //  */
    // loginWithFacebook() {
    //   return this.afAuth.auth.signInWithPopup(
    //     new firebase.auth.FacebookAuthProvider());
   // }

}

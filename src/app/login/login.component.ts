// HostBinding will help us later on in this tutorial when we add router animations. 
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})

/**
 *  LoginComponent will serve as the entry point into our application where users can login.
 */
export class LoginComponent implements OnInit {

  error: any;

  /**
   * 
   * In the constructor we're using dependency injection on AngularFire and the Router. Inside of it, we're checking when this app loads if a user is currently logged in. 
   * If so, we're sending them to the /members route
   */
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(authState => {
        if (authState) {
          this.router.navigateByUrl('/members');
        }
      });

  }

  loginFb() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(
            (success) => {
                this.router.navigate(['/members']);
              }).catch(
            (err) => {
                this.error = err;
            });
    }

  ngOnInit() {
  }

}

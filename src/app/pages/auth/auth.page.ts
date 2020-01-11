import { Component, OnInit } from '@angular/core';
import { WindowService } from './window.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  windowRef: any;
  verificationCode: string;
  mobile: any;
  user: any;

  constructor(private win: WindowService,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });

    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = '+88' + this.mobile;

    firebase.auth().signInWithPhoneNumber(num, appVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
    }).catch((error) => {
      if (error.code === 'auth/invalid-phone-number') {
        alert('Invalid Phone Number');
      } else {
        alert(error.message);
      }
    });

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
        .confirm(this.verificationCode)
        .then( (result) => {
          this.router.navigate(['/', 'tabs', 'generator']).then();
        })
        .catch( error => {
          alert('Incorrect Code Enter');
          console.log(error, 'Incorrect code entered?');
        });
  }

}

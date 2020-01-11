import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

firebase.initializeApp({
  apiKey: 'AIzaSyBRzrvvV_LbHWquklbWnjVmqk9xt-edZQQ',
  authDomain: 'testauth-37471.firebaseapp.com',
  databaseURL: 'https://testauth-37471.firebaseio.com',
  projectId: 'testauth-37471',
  storageBucket: 'testauth-37471.appspot.com',
  messagingSenderId: '830728825053',
  appId: '1:830728825053:web:ea845f2dfb1fedcef91334'
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

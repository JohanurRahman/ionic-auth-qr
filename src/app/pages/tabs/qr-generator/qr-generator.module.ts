import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGeneratorPageRoutingModule } from './qr-generator-routing.module';

import { QrGeneratorPage } from './qr-generator.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneratorPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}

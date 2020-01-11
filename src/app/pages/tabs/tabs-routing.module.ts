import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'generator',
        loadChildren: () => import('./qr-generator/qr-generator.module').then( m => m.QrGeneratorPageModule )
      },
      {
        path: 'scanner',
        loadChildren: () => import('./qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabsPageRoutingModule {}

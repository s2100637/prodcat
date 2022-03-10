import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/phone-list', pathMatch: 'full' },
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'item/:id', component: PhoneDetailComponent }  
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

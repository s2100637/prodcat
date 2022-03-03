import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/phone-list' },
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'phone-detail/:id', component: PhoneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    title: 'Landing Page',
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: 'Privacy Page',
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

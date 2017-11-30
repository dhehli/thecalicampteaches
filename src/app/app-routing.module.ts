import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { SignupComponent }  from './components/signup/signup.component';
import { LoginComponent }  from './components/login/login.component';
import { AdminComponent }  from './components/admin/admin.component';
import { TestimonialComponent }  from './components/testimonial/testimonial.component';
import { TestimonialAddComponent }  from './components/testimonial/testimonial-add.component';
import { TestimonialDetailComponent }  from './components/testimonial/testimonial-detail.component';

import { AuthenticationGuard } from './guard/authentication';
import { MemberComponent }  from './components/member/member.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'testimonial/add', component: TestimonialAddComponent },
    { path: 'testimonial/detail/:uid', component: TestimonialDetailComponent }
]

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'member', component: MemberComponent, canActivate: [AuthenticationGuard] },


  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterModule.forRoot(adminRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

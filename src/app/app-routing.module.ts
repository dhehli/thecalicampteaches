import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { SignupComponent }  from './components/signup/signup.component';
import { LoginComponent }  from './components/login/login.component';
import { ForgotpasswordComponent }  from './components/login/login.component';
import { ResetpasswordComponent } from './components/forgotpassword/resetpassword.component';

import { TestimonialComponent }  from './components/testimonial/testimonial.component';
import { TestimonialAddComponent }  from './components/testimonial/testimonial-add.component';
import { TestimonialDetailComponent }  from './components/testimonial/testimonial-detail.component';

import { TeamComponent }  from './components/team/team.component';
import { TeamAddComponent }  from './components/team/team-add.component';
import { TeamDetailComponent }  from './components/team/team-detail.component';

import { GuardAdmin } from './guard/guard-admin';
import { GuardMember } from './guard/guard-member';
import { MemberComponent }  from './components/member/member.component';

import { AdminComponent }  from './components/admin/admin.component';

const publicRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
]

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [GuardAdmin] },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'testimonial/add', component: TestimonialAddComponent },
  { path: 'testimonial/detail/:uid', component: TestimonialDetailComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/add', component: TeamAddComponent },
  { path: 'team/detail/:uid', component: TeamDetailComponent }
]

const memberRoutes: Routes = [
  { path: 'member', component: MemberComponent, canActivate: [GuardMember] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(publicRoutes),
    RouterModule.forRoot(memberRoutes),
    RouterModule.forRoot(adminRoutes)
  ]
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

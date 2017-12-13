import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Public Components
import { PublicComponent }  from './components/public/public.component';

import { HomeComponent }  from './components/public/home/home.component';
import { SignupComponent }  from './components/public/signup/signup.component';
import { LoginComponent }  from './components/public/login/login.component';
import { ForgotpasswordComponent }  from './components/public/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/public/forgotpassword/resetpassword.component';


//Admin Components
import { AdminComponent }  from './components/admin/admin.component';
import { GuardAdmin } from './guard/guard-admin';

import { TestimonialComponent }  from './components/admin/testimonial/testimonial.component';
import { TestimonialAddComponent }  from './components/admin/testimonial/testimonial-add.component';
import { TestimonialDetailComponent }  from './components/admin/testimonial/testimonial-detail.component';

import { TeamComponent }  from './components/admin/team/team.component';
import { TeamAddComponent }  from './components/admin/team/team-add.component';
import { TeamDetailComponent }  from './components/admin/team/team-detail.component';

//Member Components
import { GuardMember } from './guard/guard-member';
import { MemberComponent }  from './components/member/member.component';
import { MemberDashboard }  from './components/member/dashboard/dashboard.component';


const publicRoutes: Routes = [
  {
   path: '',
   component: PublicComponent,
   children: [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'home', component: HomeComponent },
     { path: 'signup', component: SignupComponent },
     { path: 'login', component: LoginComponent },
     { path: 'forgotpassword', component: ForgotpasswordComponent },
     { path: 'resetpassword/:hash', component: ResetpasswordComponent },
   ]
  }
];

const adminRoutes: Routes = [
  {
   path: 'admin',
   //canActivate: [GuardAdmin], // TODO: comment in
   component: AdminComponent,
   children: [
     { path: '', redirectTo: 'testimonial', pathMatch: 'full' },
     { path: 'testimonial', component: TestimonialComponent },
     { path: 'testimonial/add', component: TestimonialAddComponent },
     { path: 'testimonial/:uid', component: TestimonialDetailComponent },
     { path: 'team', component: TeamComponent },
     { path: 'team/add', component: TeamAddComponent },
     { path: 'team/:uid', component: TeamDetailComponent }
   ]
  }
];

const memberRoutes: Routes = [
  {
   path: 'member',
   //canActivate: [GuardMember], // TODO: comment in
   component: MemberComponent,
   children: [
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
     { path: 'dashboard', component: MemberDashboard },

   ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(publicRoutes),
    RouterModule.forRoot(memberRoutes),
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

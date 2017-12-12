import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { MessageService }       from './components/admin/message/message.service';

import { HeaderPublicComponent } from './components/public/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/public/home/home.component';

import { GuardAdmin } from './guard/guard-admin';
import { GuardMember } from './guard/guard-member';
import { AuthenticationService } from './guard/authentication.service';

import { SignupComponent } from './components/public/signup/signup.component';
import { UserService } from './components/public/signup/user.service';
import { LoginComponent } from './components/public/login/login.component';
import { LoginService } from './components/public/login/login.service';

import { ForgotpasswordComponent } from './components/public/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/public/forgotpassword/resetpassword.component';
import { ForgotPasswordService } from './components/public/forgotpassword/forgotpassword.service';
import { ResetPasswordService } from './components/public/forgotpassword/resetpassword.service';

import { MemberComponent } from './components/member/member.component';
import { AdminComponent } from './components/admin/admin.component';

import { TestimonialComponent } from './components/admin/testimonial/testimonial.component';
import { TestimonialAddComponent } from './components/admin/testimonial/testimonial-add.component';
import { TestimonialDetailComponent } from './components/admin/testimonial/testimonial-detail.component';

import { TestimonialService } from './components/admin/testimonial/testimonial.service';

import { TeamComponent } from './components/admin/team/team.component';
import { TeamAddComponent } from './components/admin/team/team-add.component';
import { TeamDetailComponent } from './components/admin/team/team-detail.component';

import { TeamService } from './components/admin/team/team.service';

import { TeamHomeComponent } from './components/public/home/home-team.component';
import { TestimonialHomeComponent } from './components/public/home/home-testimonials.component';
import { HeaderAdminComponent } from './components/admin/header/header.component';
import { HeaderMemberComponent } from './components/member/header/header.component';
import { PublicComponent } from './components/public/public.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { LogoutService } from './shared/logout/logout.service';
import { OrderComponent } from './components/member/order/order.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dfjnd1tqe' } as CloudinaryConfiguration)

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MemberComponent,
    AdminComponent,
    TestimonialComponent,
    TestimonialAddComponent,
    TestimonialDetailComponent,
    TestimonialHomeComponent,
    TeamComponent,
    TeamAddComponent,
    TeamDetailComponent,
    TeamHomeComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HeaderAdminComponent,
    PublicComponent,
    HeaderMemberComponent,
    LogoutComponent,
    OrderComponent
  ],
  providers: [
    GuardAdmin,
    GuardMember,
    AuthenticationService,
    MessageService,
    UserService,
    LoginService,
    ForgotPasswordService,
    ResetPasswordService,
    TestimonialService,
    TeamService,
    LogoutService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

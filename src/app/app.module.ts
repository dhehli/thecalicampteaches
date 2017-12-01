import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard } from './guard/authentication';



import { SignupComponent } from './components/signup/signup.component';
import { UserService } from './components/signup/user.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { MemberComponent } from './components/member/member.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialAddComponent } from './components/testimonial/testimonial-add.component';
import { TestimonialDetailComponent } from './components/testimonial/testimonial-detail.component';
import { TestimonialService } from './components/testimonial/testimonial.service';

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
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MemberComponent,
    AdminComponent,
    TestimonialComponent,
    TestimonialAddComponent,
    TestimonialDetailComponent
  ],
  providers: [
    AuthenticationGuard,
    HeroService,
    MessageService,
    UserService,
    LoginService,
    TestimonialService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBindingComponent } from './all-binding/all-binding.component';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';
import { CourseComponent } from './course/course.component';
import { ShorttextPipe } from './pipe/shorttext.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CoursesService } from './course/courses.service';
import { AllDirectiveComponent } from './all-directive/all-directive.component';
import { TextFormatDirective } from './my-directive/text-format.directive';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { AppErrorHandler } from './posts/common/app-error-handler';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
import { GithubProfileService } from './github-profile/github-profile.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth-service';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/adminAuth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AllBindingComponent,
    BootstrapCardComponent,
    CourseComponent,
    ShorttextPipe,
    PipeDemoComponent,
    AllDirectiveComponent,
    TextFormatDirective,
    BootstrapFormComponent,
    PostsComponent,
    SignUpComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'courses', component: CourseComponent, canActivate: [AuthGuard] },
      { path: 'binds', component: AllBindingComponent, canActivate: [AuthGuard] },
      { path: 'pipes', component: PipeDemoComponent, canActivate: [AuthGuard] },
      { path: 'directives', component: AllDirectiveComponent, canActivate: [AuthGuard] },
      { path: 'templateForm', component: BootstrapFormComponent, canActivate: [AuthGuard] },
      { path: 'reactiveForm', component: SignUpComponent, canActivate: [AuthGuard] },
      { path: 'followers/:id', component: GithubProfileComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'followers', component: GithubFollowersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    GithubFollowersService,
    GithubProfileService,
    {  provide: ErrorHandler, useClass: AppErrorHandler }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

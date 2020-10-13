import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CourseViewComponent } from './components/admin/courses/course-view/course-view.component';
import { CourseCreateComponent } from './components/admin/courses/course-create/course-create.component';
import { CourseUpdateComponent } from './components/admin/courses/course-update/course-update.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoleCreateComponent } from './components/admin/setup/role-create/role-create.component';
import { RoleViewComponent } from './components/admin/setup/role-view/role-view.component';
import { RoleUpdateComponent } from './components/admin/setup/role-update/role-update.component';
import { PasswordResetComponent } from './components/auth/password/password-reset/password-reset.component';
import { PasswordRequestComponent } from './components/auth/password/password-request/password-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CourseViewComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    RoleCreateComponent,
    RoleViewComponent,
    RoleUpdateComponent,
    PasswordResetComponent,
    PasswordRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnotifyModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

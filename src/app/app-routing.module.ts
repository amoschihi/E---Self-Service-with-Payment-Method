import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CourseViewComponent } from './components/admin/courses/course-view/course-view.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { RoleViewComponent } from './components/admin/setup/role-view/role-view.component';
import { RoleCreateComponent } from './components/admin/setup/role-create/role-create.component';
import { PasswordRequestComponent } from './components/auth/password/password-request/password-request.component';
import { PasswordResetComponent } from './components/auth/password/password-reset/password-reset.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'register', 
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'password-request',
    component: PasswordRequestComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'courses', 
    component: CourseViewComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard', 
    component:DashboardComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'roles',
    component: RoleViewComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'add-role',
    component: RoleCreateComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

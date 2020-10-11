import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CourseViewComponent } from './components/admin/courses/course-view/course-view.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

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
    path: 'courses', 
    component: CourseViewComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard', 
    component:DashboardComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

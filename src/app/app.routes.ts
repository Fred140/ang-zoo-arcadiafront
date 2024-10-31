import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { HabitatsAnComponent } from './pages/habitats-an/habitats-an.component';
import { AvisetcontactComponent } from './pages/avisetcontact/avisetcontact.component';
import { TermsEtConditionsComponent } from './pages/terms-et-conditions/terms-et-conditions.component';
import { ChoixanimauxComponent } from './pages/choixanimaux/choixanimaux.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterformComponent } from './pages/registerform/registerform.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'habitats-an', component: HabitatsAnComponent },
  { path: 'choixanimaux', component: ChoixanimauxComponent },
  { path: 'avisetcontact', component: AvisetcontactComponent },
  { path: 'terms-et-conditions', component: TermsEtConditionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerform', component: RegisterformComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'AdminDashboard', component: AdminDashboardComponent },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
];

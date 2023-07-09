import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavbarComponent } from './Admin-Flow/admin-navbar/admin-navbar.component';
import { RequestsComponent } from './Admin-Flow/request/request.component';
import { DoctorListComponent } from './Admin-Flow/doctor-list/doctor-list.component';
import { DoctorsProfileComponent } from './Doctor-Flow/doctors-profile/doctors-profile.component';
import { AuthGuard } from './AuthGuard';
import { BookingDetailsComponent } from './booking-details/booking-details.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homenav', component: HomeNavbarComponent, canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'footer', component: FooterComponent, canActivate:[AuthGuard] },
  { path: 'appoinment', component: AppoinmentComponent, canActivate:[AuthGuard] },
  { path: 'insurance', component: InsuranceComponent, canActivate:[AuthGuard] },
  { path: 'specialities', component: SpecialitiesComponent, canActivate:[AuthGuard] },
  { path: 'sidebar', component: SidebarComponent, canActivate:[AuthGuard] },
  { path: 'admin-nav', component: AdminNavbarComponent, canActivate:[AuthGuard] },
  { path: 'request', component: RequestsComponent, canActivate:[AuthGuard] },
  { path: 'doctor-list', component: DoctorListComponent, canActivate:[AuthGuard] },
  { path: 'appointment', component: AppoinmentComponent, canActivate:[AuthGuard] },
  { path: 'doctor-profile', component: DoctorsProfileComponent,canActivate:[AuthGuard] },
  { path: 'booking-details', component: BookingDetailsComponent,canActivate:[AuthGuard] },






]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

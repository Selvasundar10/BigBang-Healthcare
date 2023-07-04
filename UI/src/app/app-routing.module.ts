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



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homenav', component: HomeNavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: HomeComponent },
  { path: 'appoinment', component: AppoinmentComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'specialities', component: SpecialitiesComponent },
  { path: 'auth', component: SpecialitiesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'admin-nav', component: AdminNavbarComponent },
  { path: 'request', component: RequestsComponent },
  { path: 'doctor-list', component: DoctorListComponent }




]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { signupService } from './Services/signup.services';
import { doctorService } from './Services/doctor.service';
import { AdminNavbarComponent } from './Admin-Flow/admin-navbar/admin-navbar.component';
import { RequestsComponent } from './Admin-Flow/request/request.component';
import { DoctorListComponent } from './Admin-Flow/doctor-list/doctor-list.component';
import { DoctorNavbarComponent } from './Doctor-Flow/doctor-navbar/doctor-navbar.component';
import { BookComponent } from './book/book.component';
import { appointmentService } from './Services/appointment.service';
import { DoctorsProfileComponent } from './Doctor-Flow/doctors-profile/doctors-profile.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeNavbarComponent,
    HomeComponent,
    FooterComponent,
    AppoinmentComponent,
    InsuranceComponent,
    SpecialitiesComponent,
    SidebarComponent,
    AdminNavbarComponent,
    RequestsComponent,
    BookComponent,
    DoctorNavbarComponent,
    DoctorListComponent,
    DoctorsProfileComponent,
    BookingDetailsComponent
      
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule 


  ],
  providers: [signupService,doctorService,appointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

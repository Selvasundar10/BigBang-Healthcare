import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'Login' , component:LoginComponent},
  {path:'', component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'homenav', component:HomeNavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'footer', component:HomeComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

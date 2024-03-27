import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

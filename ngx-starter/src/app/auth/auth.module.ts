import { LayoutsModule } from './../shared/layouts/layouts.module';
import { ComponentsModule } from './../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule,
    LayoutsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

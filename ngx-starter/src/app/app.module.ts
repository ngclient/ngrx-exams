/**
 * Module Core
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

/**
* Modules Custom
*/
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { CoresModule } from './cores/cores.module';
import { UsersModule } from './users/users.module';

/**
 * Components View
 */
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { LayoutsModule } from './shared/layouts/layouts.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';

/**
 * Routing Root
 */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    CoresModule.forRoot(),
    HttpClientModule,    
    UsersModule,
    RolesModule,
    AuthModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleFormComponent } from './role-form/role-form.component';

import { LayoutsModule } from './../shared/layouts/layouts.module';
import { ComponentsModule } from './../shared/components/components.module';

const COMPONENTS = [
  RoleComponent, 
  RoleListComponent, 
  RoleFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule,
    
    ComponentsModule,
    LayoutsModule
  ],
  declarations: [...COMPONENTS]
})
export class RolesModule { }

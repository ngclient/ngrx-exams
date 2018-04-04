import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role-form/role-form.component';

const routes: Routes = [
  { path: 'role', component: RoleComponent },
  // components Host multil view 
  { path: 'role/create', component: RoleFormComponent },
  { path: 'role/:id', component: RoleFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }

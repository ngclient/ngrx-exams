
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * components
 */
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  // lazy load module // search
  { path: 'user', loadChildren: './users/users.module#UsersModule', data: { preload: true} },
  { path: 'role', loadChildren: './roles/roles.module#RolesModule', data: { preload: true} },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

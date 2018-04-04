import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { PageContentComponent } from './page-content/page-content.component';

const COMPONENTS = [
  HeadersComponent, 
  SidebarsComponent, 
  PageContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
    
})
export class ComponentsModule { }

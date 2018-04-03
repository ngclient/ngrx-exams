import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    // Third party modules
    NgbModule.forRoot(),
  ],
})
export class CoresModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoresModule,
      providers: []
    }
  }
}

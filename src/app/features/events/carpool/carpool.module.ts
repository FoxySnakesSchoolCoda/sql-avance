import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CarpoolListComponent } from './components/carpool-list/carpool-list.component';
import { CarpoolDetailComponent } from './components/carpool-detail/carpool-detail.component';
import { CarpoolFormComponent } from './components/carpool-form/carpool-form.component';
import { CarpoolRoutingModule } from './carpool-routing.module';

@NgModule({
  declarations: [CarpoolListComponent, CarpoolDetailComponent, CarpoolFormComponent],
  imports: [CommonModule, SharedModule, CarpoolRoutingModule],
})
export class CarpoolModule {}

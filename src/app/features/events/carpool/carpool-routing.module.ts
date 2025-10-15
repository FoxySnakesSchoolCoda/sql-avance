import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpoolListComponent } from './components/carpool-list/carpool-list.component';
import { CarpoolFormComponent } from './components/carpool-form/carpool-form.component';
import { CarpoolDetailComponent } from './components/carpool-detail/carpool-detail.component';

const routes: Routes = [
  { path: '', component: CarpoolListComponent },
  { path: 'create', component: CarpoolFormComponent },
  { path: ':rideId', component: CarpoolDetailComponent },
  { path: ':rideId/edit', component: CarpoolFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpoolRoutingModule {}

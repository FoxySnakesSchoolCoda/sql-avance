import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { PollFormComponent } from './components/poll-form/poll-form.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';

const routes: Routes = [
  { path: '', component: PollListComponent },
  { path: 'create', component: PollFormComponent },
  { path: ':pollId', component: PollDetailComponent },
  { path: ':pollId/edit', component: PollFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollsRoutingModule {}

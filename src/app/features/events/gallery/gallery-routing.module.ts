import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery-form/gallery-form.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';

const routes: Routes = [
  { path: '', component: GalleryListComponent },
  { path: 'create', component: GalleryFormComponent },
  { path: ':mediaId', component: GalleryDetailComponent },
  { path: ':mediaId/edit', component: GalleryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { GalleryFormComponent } from './components/gallery-form/gallery-form.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [GalleryListComponent, GalleryDetailComponent, GalleryFormComponent],
  imports: [CommonModule, SharedModule, GalleryRoutingModule],
})
export class GalleryModule {}

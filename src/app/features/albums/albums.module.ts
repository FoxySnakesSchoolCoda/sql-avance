import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';

@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent, AlbumFormComponent],
  imports: [CommonModule, SharedModule, AlbumsRoutingModule],
})
export class AlbumsModule {}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  getAlbums(): Observable<Album[]> {
    return of([]);
  }

  getAlbum(id: string): Observable<Album | null> {
    console.log('fetch album', id);
    return of(null);
  }

  saveAlbum(album: Album): Observable<Album> {
    console.log('save album', album);
    return of(album);
  }
}

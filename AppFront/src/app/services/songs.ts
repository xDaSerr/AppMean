import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SongsService {

  httpClient = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/songs`;


  getAll(){
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(songId: string){
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${songId}`)
    );
  }

  // Método para crear canciones
  create(song: any){
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, song)
    );
  }

   //  Eliminar canción
  delete(songId: string){
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${songId}`)
    );
  }

  // Actualizar canción
  update(songId: string, song: any){
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/${songId}`, song)
    );
  }

}

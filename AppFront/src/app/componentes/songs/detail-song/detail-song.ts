import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../../../services/songs';

@Component({
  selector: 'app-detail-song',
  imports: [],
  templateUrl: './detail-song.html',
  styleUrl: './detail-song.css',
})
export class DetailSong {

  activatedRoute = inject(ActivatedRoute);
  songsService = inject(SongsService);

  song = signal<any>({}); 
  
  ngOnInit(){
    this.activatedRoute.params.subscribe ( async params => {
      const song = await this.songsService.getById(params['songId']);
      this.song.set(song);
    })
  }
     


}

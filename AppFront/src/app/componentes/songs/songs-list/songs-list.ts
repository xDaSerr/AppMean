import { Component, inject, signal } from '@angular/core';
import { SongsService } from '../../../services/songs';
import { NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-songs-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './songs-list.html',
  styleUrl: './songs-list.css',
})
export class SongsList {

  arrSongs = signal<any[]>([]);
  
  songsService = inject(SongsService);

async ngOnInit(){
    const songs = await this.songsService.getAll();
    this.arrSongs.set(songs);
  }

}

import { Routes } from '@angular/router';
import { SongsList } from './componentes/songs/songs-list/songs-list';
import { DetailSong } from './componentes/songs/detail-song/detail-song';

export const routes: Routes = [
    {path: 'songs', component: SongsList},
    {path: 'songs/:songId', component: DetailSong}
];

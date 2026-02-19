import { Routes } from '@angular/router';
import { SongsList } from './componentes/songs/songs-list/songs-list';
import { DetailSong } from './componentes/songs/detail-song/detail-song';
import { AddSong } from './componentes/songs/add-song/add-song';
import { Home } from './componentes/home/home';

export const routes: Routes = [
    {path: 'songs', component: SongsList},
    {path: 'songs/add', component: AddSong},
    {path: '', component: Home },
    {path: 'songs/:songId', component: DetailSong}
];


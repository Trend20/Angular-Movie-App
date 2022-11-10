import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: '***', component: MoviesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

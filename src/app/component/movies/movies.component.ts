import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    return this.movieService.getMovies().subscribe(response =>{
      console.log(response);
      this.movies = response.Search;
    })
  }
}

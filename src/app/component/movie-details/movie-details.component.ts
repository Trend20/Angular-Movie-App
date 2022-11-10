import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovieDetails()
  }

  loadMovieDetails(){
    return this.movieService.getSingleMovie(this.route.snapshot.paramMap.get('id')).subscribe(movie =>{
      this.movie = movie;
      console.log(movie)
    })
  }
}

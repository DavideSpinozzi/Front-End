import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { MoviePopular } from 'src/app/models/movie-popular';


@Component({
    selector: 'app-details',
    template: `
        <div class="bg-black main d-flex align-items-center justify-content-center text-white main">
  <div class="bg-dark p-5 rounded-2 w-75 border border-secondary" *ngIf="movie">

    <div class="mt-3 row">
    <div class="col-4 d-flex align-items-center justify-content-center">
    <img src="http://image.tmdb.org/t/p/w500{{ movie.poster_path }}" alt="film" /></div>
    <div class=" col-8">
        <h1 class="mb-5">{{ movie.title }}</h1>
    <h2 class="mb-5">{{ movie.overview }}</h2>
    <h3 class="mb-5">Data di uscita: {{ movie.release_date }}</h3>
    <h3>Voto: {{ movie.vote_average }}</h3></div></div>
  </div>
</div>

    `,
    styles: [
        `
            .main {
                height: 100vh;
background-image: url('https://mebincdn.themebin.com/1664271579476.jpg');
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
            }
        `,
    ],
})
export class DetailsComponent implements OnInit {
    movie: MoviePopular | undefined;

    constructor(
      private route: ActivatedRoute,
      private movieService: MoviesService
    ) {}

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const movieId = params['id'];
        this.loadMovieDetails(movieId);
      });
    }

    loadMovieDetails(movieId: number): void {
      this.movieService.dettaglioMovies(movieId).subscribe((movie: MoviePopular) => {
        this.movie = movie;
      });
    }
  }

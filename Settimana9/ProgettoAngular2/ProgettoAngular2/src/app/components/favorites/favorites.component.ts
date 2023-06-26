import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { MoviePopular } from 'src/app/models/movie-popular';
import { Favourite } from 'src/app/models/favourite.interface';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-favorites',
  template: `
    <h1 class="titolo p-3">Film Preferiti</h1>
    <div class="row w-100 m-auto">
                <div class="col-3 p-4 contenitoreCards" *ngFor="let movie of favoriti">
                <div
                    class="card w-100 h-100 bg-dark text-white"
                    style="width: 18rem;"
                >
                    <img
                        class="card-img-top h-100"
                        src="http://image.tmdb.org/t/p/w500{{movie.poster_path}}"
                        alt="film"
                    />
                    <div class="card-body">
                        <h3 class="card-text">
                            {{ movie.title }}
                        </h3>

                    </div>
                </div>
            </div>
        </div>
  `,
  styles: [`
  .contenitoreCards{
            height: 800px;
        }
        .titolo{
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(46,46,46,1) 20%, rgba(46,46,46,1) 50%, rgba(46,46,46,1) 80%, rgba(0,0,0,1) 100%);
        }
  `
  ]
})
export class FavoritesComponent implements OnInit {

    user: AuthData | null = null;
    favoriti: MoviePopular[] = [];

    constructor(private movieSrv: MoviesService, private authSrv: AuthService) {}

    ngOnInit(): void {
      this.authSrv.user$.subscribe((userData) => {
        this.user = userData;
        this.recuperaFavoriti();
      });
    }

    recuperaFavoriti(): void {
      if (this.user) {
        this.movieSrv.recuperaFavoriti(this.user.user.id).subscribe((favoriti: Favourite[]) => {
          const movieIds = favoriti.map((f: Favourite) => f.movieId);
          this.movieSrv.recuperaMovies().subscribe((movies: MoviePopular[]) => {
            this.favoriti = movies.filter((m: MoviePopular) => movieIds.includes(m.id));
          });
        });
      }
    }
}

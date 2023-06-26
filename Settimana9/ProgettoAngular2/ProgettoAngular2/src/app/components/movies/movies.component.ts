import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { MoviePopular } from 'src/app/models/movie-popular';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Favourite } from 'src/app/models/favourite.interface';

@Component({
    selector: 'app-movies',
    template: `
        <div class="bg-black main">
            <h1 class="text-center text-white titolo p-3">MOVIES</h1>
            <div class="row w-100 m-auto">
                <div class="col-3 p-4 contenitoreCards" *ngFor="let movie of movies">
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
                        <div class="d-flex justify-content-between align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                            (click)="isFavorito(movie) ? eliminaFavorito(movie) : aggiungiFavorito(movie.id)" [ngClass]="{'text-danger': isFavorito(movie), 'text-white': !isFavorito(movie)}"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                        </svg>
                        <button
                        class="btn btn-outline-light"
                        type="submit"
                        [routerLink]="[movie.id]"
                    >
                        Dettagli
                    </button>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [
        `.main{
            min-height: 100vh
        }
        .contenitoreCards{
            height: 800px;
        }
        .titolo{
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(46,46,46,1) 20%, rgba(46,46,46,1) 50%, rgba(46,46,46,1) 80%, rgba(0,0,0,1) 100%);
        }
        `
    ],
})
export class MoviesComponent implements OnInit {
    movies!: MoviePopular[];
    utente!: AuthData | null;
    favoriti!: Favourite[];

    constructor(private movieSrv: MoviesService, private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_utente) => {
            this.utente = _utente;
        });
        setTimeout(() => {
            this.recuperaFavoriti(this.utente!.user.id);
            this.recuperaFilm();
        }, 1500);
    }

    recuperaFilm(): void {
        this.movieSrv.recuperaMovies().subscribe((films: MoviePopular[]) => {
            this.movies = films;
        });
    }

    recuperaFavoriti(userId: number): void {
        this.movieSrv
            .recuperaFavoriti(userId)
            .subscribe((likes: Favourite[]) => {
                this.favoriti = likes;
            });
    }

    aggiungiFavorito(idFilm: number): void {
        const favorito: Favourite = {
            userId: this.utente!.user.id,
            movieId: idFilm,
        };

        this.movieSrv.aggiungiFavorito(favorito).subscribe(() => {
            this.recuperaFavoriti(this.utente!.user.id);
        });
    }

    eliminaFavorito(film: MoviePopular): void {
        const idFav = this.getIdFavorito(film);
        if (idFav) {
            this.movieSrv.rimuoviFavorito(idFav).subscribe(() => {
                this.recuperaFavoriti(this.utente!.user.id);
            });
        }
    }

    isFavorito(film: MoviePopular): boolean {
        return this.favoriti.some((f) => f.movieId === film.id);
    }

    getIdFavorito(film: MoviePopular): number | undefined {
        const favorito = this.favoriti.find((f) => f.movieId === film.id);
        return favorito?.id;
    }
}

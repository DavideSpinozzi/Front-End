import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MoviePopular } from 'src/app/models/movie-popular';
import { AuthService } from 'src/app/auth/auth.service';
import { Favourite } from 'src/app/models/favourite.interface';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
baseURL = environment.baseURL;
  constructor(private http: HttpClient, private authSrv: AuthService) { }

  recuperaMovies(){
    return this.http.get<MoviePopular[]>(`${this.baseURL}/movies-popular`);
  }

  dettaglioMovies(id: number) {
    return this.http.get<MoviePopular>(`${this.baseURL}/movies-popular/${id}`);
}

recuperaFavoriti(userId: number) {
    return this.http.get<Favourite[]>(`${this.baseURL}/favorites?userId=${userId}`);
}

aggiungiFavorito(favorito: Favourite) {
    return this.http.post(`${this.baseURL}/favorites`, favorito);
}

rimuoviFavorito(favoritoId: number) {
    return this.http.delete(`${this.baseURL}/favorites/${favoritoId}`);
}

}

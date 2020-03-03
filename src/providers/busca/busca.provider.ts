import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../../app/models/movie.model';
import { map } from 'rxjs/operators'

@Injectable()
export class BuscaProvider {

  constructor(
    public http: HttpClient) {
    console.log('Hello BuscaProvider Provider');
  }

  public async searchMovies(val: string): Promise<MovieModel[]>{
    const response = await this.http.get('https://api.themoviedb.org/3/search/movie?api_key=e0d4493421373f6f99b25a46d61675d9&language=pt-BR&page=1&include_adult=false&query='+val)
    // const response = await this.http.get('https://api.themoviedb.org/3/search/movie?api_key=e0d4493421373f6f99b25a46d61675d9&language=pt-BR&page=1&include_adult=false&query=parasita')
    .pipe(
      map(
        (data:{results: MovieModel[]}) => data
      )
    ).toPromise();
    return response.results;
  }

  public async getMovies(): Promise<MovieModel[]>{
    const response = await this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=e0d4493421373f6f99b25a46d61675d9&language=pt-BR&page=1')
    .pipe(
      map(
        (data:{results: MovieModel[]}) => data
      )
    ).toPromise();
    return response.results;
  }
}

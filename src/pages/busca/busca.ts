import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { MovieModel } from '../../app/models/movie.model';
import { BuscaProvider } from '../../providers/busca/busca.provider';

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {
  movies: MovieModel[];
  moviesDefault: MovieModel[];
  searchQuery: string = '';
  filter: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private homeProvider: BuscaProvider,
    public events: Events) {
      this.getMovies();
  }

  async getMovies(){
    this.moviesDefault = await this.homeProvider.getMovies()
  }

  async getItems(ev: any) {
    console.log(ev.target.value);
    this.filter = ev.target.value && ev.target.value.lenght > 0;
    this.movies = await this.homeProvider.searchMovies(ev.target.value)
  }
}


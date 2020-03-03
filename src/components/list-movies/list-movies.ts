import { MovieModel } from './../../app/models/movie.model';
import { Component, Input } from '@angular/core';
import { ModalController, NavController, Events } from 'ionic-angular';

@Component({
  selector: 'list-movies',
  templateUrl: 'list-movies.html'
})
export class ListMoviesComponent {
  @Input() movies: MovieModel[];

  constructor(   
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public events: Events
  ) {}

  async ionViewDidLoad(){
  }

  openMovie(filme: MovieModel) {
    this.navCtrl.push('FilmPage', filme);
  }

}

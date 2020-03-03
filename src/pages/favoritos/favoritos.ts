import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from '../../app/models/movie.model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  
  movies: MovieModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,) {
  }

  async ionViewDidEnter(){
    this.movies = await this.storage.get('favoritos') || [];
  }

}

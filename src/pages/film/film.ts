import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieModel } from '../../app/models/movie.model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {  

  filme: MovieModel;
  favoritos: MovieModel[] = [];
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public navParams: NavParams,
    private storage: Storage,
    ) {
      console.log(this.navParams.data)
      this.filme = this.navParams.data;
    }

  async ionViewDidLoad() {
    this.favoritos = await this.storage.get('favoritos') || [];
  }

  async addFavoritos(filme: MovieModel){
    if(this.favoritos.find((f)=> f.id == filme.id)){
      this.favoritos = this.favoritos.filter((f)=> f.id != filme.id);
    } else {
      this.favoritos.unshift(filme);
    }
    await this.storage.set('favoritos', this.favoritos);
    console.log(await this.storage.get('favoritos'));
  }

  isFavorito(id: number): boolean{
    return this.favoritos.length && !!this.favoritos.find((f)=> f.id == id);
  }

}

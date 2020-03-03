import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPage } from './favoritos';

@NgModule({
  declarations: [
    FavoritosPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritosPage),
    ComponentsModule
  ],
})
export class FavoritosPageModule {}

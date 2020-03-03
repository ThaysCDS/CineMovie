import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaPage } from './busca';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuscaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaPage),
    ComponentsModule
  ],
})
export class BuscaPageModule {}

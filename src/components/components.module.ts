import { NgModule } from '@angular/core';
import { ListMoviesComponent } from './list-movies/list-movies';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ListMoviesComponent],
	imports: [
		CommonModule, 
		IonicModule,
	],
	exports: [ListMoviesComponent]
})
export class ComponentsModule {}

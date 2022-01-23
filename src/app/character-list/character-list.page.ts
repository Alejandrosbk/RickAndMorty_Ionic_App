import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Characters } from '../interfaces/characters.interface';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // CREAMOS EL ARREGLO PARA OBTENER LOS PERSONAJES
  characters: Characters[] = [];

  // GUARDAMOS EL TERMINO QUE EL USUARIO ESCRIBE EN ESTA PROPIEDAD
  textSearch = '';

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
    this.getCharacters();
  }

  // LLAMADA HTTP A LA API
  getCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character/')
    .subscribe((res: any)=> {
      this.characters = res.results;
      console.log(res);
      
    });
  }

  // METODO QUE RECIBE LO QUE EL USUARIO ESCRIBE
  onSearch(event) {
    this.textSearch = event.detail.value;
  }

  // SCROLL INFINITO 
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.characters.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

}

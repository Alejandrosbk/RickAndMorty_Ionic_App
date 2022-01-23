import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-character',
  templateUrl: './profile-character.page.html',
  styleUrls: ['./profile-character.page.scss'],
})
export class ProfileCharacterPage implements OnInit {

  profileId: string;
  character: any;

  constructor( private activatedRoute: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.getIdCharacter();
  }

  // METODO PARA EXTRAER ID DE LA RUTA Y HACER LA CONSULTA
  getIdCharacter(){
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe(res => {
        this.character = res;
      });
  }
}

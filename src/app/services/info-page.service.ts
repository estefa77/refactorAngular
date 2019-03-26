import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interface/infoPage.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  info: infoPagina = {};
  cargada = false;
  team: any[] = [];


  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarTeam();
 
  }

  private cargarInfo()  {

    this.http.get('assets/data/user.json')
    .subscribe( (resp: infoPagina) => {
      
      this.cargada = true;
      this.info = resp;
    
    });
  }

  private cargarTeam() {
    this.http.get('https://estefaaburrida.firebaseio.com/tecnology.json')
    .subscribe( (resp: any[]) => {
      
      this.team = resp;
      console.log(resp);
    
    });

  }

}

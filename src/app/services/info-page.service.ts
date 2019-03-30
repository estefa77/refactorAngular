import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interface/infoPage.interface';
import { workPagina } from '../interface/workPage.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  info: infoPagina = {};
  cargada = false;
  team: any[] = [];

  data: workPagina = {};
  load = false;
  workDetails: any[] = [];


  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarTeam();
    this.cargarWork();
 
  }

  private cargarInfo()  {

    this.http.get('assets/data/user.json')
    .subscribe( (resp: infoPagina) => {
      
      this.cargada = true;
      this.info = resp;
    
    });
  }

  private cargarWork()  {

    this.http.get('assets/data/work.json')
    .subscribe( (resp: workPagina) => {
      
      this.load = true;
      this.data = resp;
    
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

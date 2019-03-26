import { Component } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { InfoPageService } from './services/info-page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor( public infoPageService: InfoPageService ){

  }


}

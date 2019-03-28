import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  tecnologyes = [
    {"id": 1, "name": "Flexbox"},
    {"id": 2, "name": "Grid Layout"},
    {"id": 3, "name": "Newsletter-Flexbox"},
    {"id": 4, "name": "Animation-CSS"},
    {"id": 5, "name": "Bootstrap"},
    {"id": 6, "name": "Angular"}
  ]
  constructor( private router: Router) { }

  ngOnInit() {
  }

  onSelect(tecnologyes){
    this.router.navigate(['/work', tecnologyes.id]);
  }

}

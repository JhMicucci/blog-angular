import { Component, Input } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {


  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription=""
  @Input()
  Id:string="0"

  constructor(){}

  ngOnInit(): void{

  }

}

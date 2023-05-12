import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['Spider','Iroman','Hulk','She Hulk','Thor'];
  deleteHero?: string;

  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }

}

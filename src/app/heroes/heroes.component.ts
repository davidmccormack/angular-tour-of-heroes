import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes ?: Hero[];

  getHeroes() : void {
    this.messageService.addMessage("Hero Component - Fetching Messages")
    this.heroService.getHeroes()
      .subscribe((hero) => this.heroes = hero);
  }

  // Use constructor to initialize services
  // not for any logic.

  // public properties have to be binded to component.
  constructor(private heroService : HeroService,
    private messageService : MessageService) {}

  // Initialization code and logic here.
  ngOnInit(): void {
    this.getHeroes();
  }

}

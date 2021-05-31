import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import { Observable, of } from 'rxjs';
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // of(HEROES) returns an Observable<Hero[]>
  // that emits a single value, the array of
  // mock heroes.
  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage("Hero Service - Sending heroes");
    return heroes;
  }

  getHero(id : Number) {
    //Assume her with id always exists
    const hero = HEROES.find(h => h.id === id);
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
  constructor(private messageService : MessageService) { }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './heroes-db';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn : 'root',
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService : Fetched Heroes.');
    return of(Heroes);
  }

  getHeroById(id : number) : Observable<Hero> {
    this.messageService.add(`Fetched hero with id = ${id}`);
    return of(Heroes.find(hero => hero.id === id)); 
  }

}
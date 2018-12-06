import { Injectable } from '@angular/core';

import { Jedi } from '../models/jedi'
import { JEDIS } from './mocks-jedis'

@Injectable({ providedIn: 'root' })

export class JediService {
   private jedis: Jedi[] = [];

   constructor() { }

   getJedis() {
    this.jedis = JEDIS;					 
    return this.jedis;
   }
}
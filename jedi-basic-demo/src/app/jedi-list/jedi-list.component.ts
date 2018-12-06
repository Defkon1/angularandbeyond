import { Component, OnInit } from '@angular/core';
import { JediService } from '../shared/services/jedi';

import { Jedi } from '../shared/models/jedi';

@Component({
	selector:    'app-jedi-list',
	templateUrl: './jedi-list.component.html',
	providers:  [ JediService ]
})
export class JediListComponent implements OnInit {
   jedis: Jedi[];
   selectedJedi: Jedi;

   constructor(private service: JediService) { }

   ngOnInit() {
      this.jedis = this.service.getJedis();
   }

   selectJedi(jedi: Jedi) { 
       this.selectedJedi = jedi; 
    }
}
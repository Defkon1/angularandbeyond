import { Component, OnInit, Input } from '@angular/core';
import { Jedi } from '../shared/models/jedi';
import { Sex } from '../shared/models/sex';
import { Race } from '../shared/models/race';

@Component({
  selector: 'app-jedi-detail',
  templateUrl: './jedi-detail.component.html',
  styleUrls: ['./jedi-detail.component.css']
})
export class JediDetailComponent implements OnInit {

  @Input() jedi: Jedi;

  constructor() {}

  ngOnInit() { }

  getJediSex(){
    return Sex[this.jedi.sex];
  }

  getJediRace(){
    return Race[this.jedi.race];
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  subcode = new FormControl('');
  batch = new FormControl('');
  section = new FormControl('');
  gen: string;
  send() {
    this.gen = 'http://127.0.0.1:8000/secfcd/?sec=' + this.section.value + '&batch=' + this.batch.value + '&scode=' + this.subcode.value;
    this.data.changeMessage(this.gen);
  }
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}


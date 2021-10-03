import { Component, OnInit } from '@angular/core';
import { WordService } from './../services/word.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public wordService: WordService) { }

  ngOnInit() {
  }

}

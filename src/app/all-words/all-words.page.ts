import { Component,  ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { WordService } from './../services/word.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-all-words',
  templateUrl: './all-words.page.html',
  styleUrls: ['./all-words.page.scss'],
})
export class AllWordsPage implements OnInit {
  words:any;
  
  @ViewChild(IonInfiniteScroll,{ read: true, static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(
    private firestore: AngularFirestore, private router: Router, wordservice: WordService, ) { }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  
  ngOnInit() {
    this.initializeWords().then((values)=>{
      this.words = values;
    });
  }
  
  async initializeWords(): Promise<any> {
    
    let words = await this.firestore.collection('words')
      .valueChanges().pipe(first()).toPromise();
    return words;
  }

}

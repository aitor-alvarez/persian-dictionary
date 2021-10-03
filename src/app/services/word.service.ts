import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private dbPath: string = '/words';
  public words: AngularFireList<any>;
  constructor(public firestore: AngularFirestore, public db: AngularFireDatabase) {}

  getWordDetail(wordId: string) {
    const word_out = this.firestore.collection('words').doc(wordId);
    return word_out;
  }
  getWordList() {
    return this.firestore.collection('words');
  }
  getWords(){
    return this.words = this.db.list('/words');
  }
  findWord(start): AngularFireList<any> {
    return this.db.list(this.dbPath, 
      ref=>ref.orderByChild('words').startAt(start)
    );
  }
}

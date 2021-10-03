import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Word } from '../../models/word.interface'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

createWord(
    word: string,
    grammar: string,
    pronunciation: string,
    roots: string,
    definition: string,
    example: string,
    translation: string,
    related: string,
    phrasal_verb: string,
    idioms: string
): Promise<void> { const id = this.firestore.createId();
  
  return this.firestore.doc(`words/${id}`).set({
    id,
    word,
    grammar,
    pronunciation,
    roots,
    definition,
    example,
    translation,
    related,
    phrasal_verb,
    idioms
  });
}
}

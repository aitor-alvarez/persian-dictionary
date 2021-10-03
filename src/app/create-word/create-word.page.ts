import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-word',
  templateUrl: './create-word.page.html',
  styleUrls: ['./create-word.page.scss'],
})
export class CreateWordPage implements OnInit {

  
  public createWordForm: FormGroup;
  public router : Router;
constructor(public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public firestoreService: FirestoreService,
  
  formBuilder: FormBuilder) { this.createWordForm = formBuilder.group({
    word: ['', Validators.required],
    grammar: [''],
    pronunciation: [''],
    roots: [''],
    definition: [''],
    example: [''],
    related: ['' ],
    translation: [''],
    phrasal_verb: ['' ],
    idioms: ['']
  }
  )};
  async createWord() {
    const loading = await this.loadingCtrl.create();
    
    const word = this.createWordForm.value.word;
    const grammar = this.createWordForm.value.grammar;
    const pronunciation = this.createWordForm.value.pronunciation;
    const roots = this.createWordForm.value.roots;
    const definition = this.createWordForm.value.definition;
    const example = this.createWordForm.value.example;
    const translation = this.createWordForm.value.translation;
    const related = this.createWordForm.value.related;
    const phrasal_verb = this.createWordForm.value.phrasal_verb;
    const idioms = this.createWordForm.value.idioms;
    
    this.firestoreService
      .createWord(word, grammar, pronunciation, roots, definition, example, related, translation, phrasal_verb, idioms)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.router.navigateByUrl('');
          });
        },
        error => {
          console.error(error);
        }
      );
  
    return await loading.present();
  }
  ngOnInit() {
  }

}


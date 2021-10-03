import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { WordService } from './../services/word.service';
import { Observable } from 'rxjs';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { FirebaseStorage } from "@angular/fire";
import { AngularFireStorage } from '@angular/fire/storage';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  cloudStorage:FirebaseStorage;
public word;
public query_key;
public word_def
audio: any;

  constructor(private route: ActivatedRoute, private wordService: WordService, 
    private storage: Storage, public navCtrl: NavController, public platform: Platform, 
    private nativeAudio: NativeAudio, private store:AngularFireStorage){
      this.cloudStorage= store.storage.app.storage();
  }


  ngOnInit() {
    this.audio = new Audio();
    const wordId: string = this.route.snapshot.paramMap.get('id');
    this.word = this.wordService.getWordDetail(wordId);
    this.word_def= this.word.valueChanges();
  
  }
  return(){
    this.navCtrl.navigateRoot('/home');
  }
  saveToDb(){
    let word_id = this.route.snapshot.paramMap.get('id');
    this.word_def.subscribe(value => {
      this.set(word_id, value.word);
    });
  }
  
  async set(key: string, value: any): Promise<any> {
    const result = await this.storage.get(key);
    console.log('storageGET: ' + key + ': ' + result);
      if (result) {
        console.log('Word in db')
      }
      else{
    try {
    const result = await this.storage.set(key, value);
    console.log('set string in storage: ' + result);
    return true;
    } catch (reason) {
    console.log(reason);
    return false;
    }
  }
    }
    
    playAudio(val) {
      if (val==='formal') {
        
      this.word_def.subscribe(value => {
      this.cloudStorage.ref('Audio/'+value.pronunciation_formal.toLowerCase()).getDownloadURL().then(function(url) {
        new Audio(url).play();         
         });
        });
      }
      else if(val==='informal') {
        
        this.word_def.subscribe(value => {
        this.cloudStorage.ref('Audio/'+value.pronunciation_informal.toLowerCase()).getDownloadURL().then(function(url) {
          new Audio(url).play();         
           });
          });
        }
}
}


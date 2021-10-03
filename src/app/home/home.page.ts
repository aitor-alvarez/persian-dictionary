import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WordService } from './../services/word.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

public wordList: any[];

  constructor(private firestore: AngularFirestore, private router: Router, wordservice: WordService, 
    private zone: NgZone, private splashScreen: SplashScreen) { }
    
  async ngOnInit() {
   
    this.splashScreen.show();
    this.splashScreen.hide();
    this.wordList = await this.initializeWords();
  }
  
  async ionViewWillEnter(){
    
    this.wordList = await this.initializeWords();
      console.log(this.wordList)
  }

  async initializeWords(): Promise<any> {
    
    let wordList = await this.firestore.collection('words')
      .valueChanges().pipe(first()).toPromise();
    return wordList;
  }
  reloadPage() { 
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }

  async filterList(evt) {
    
    this.wordList = await this.firestore.collection('words')
    .valueChanges().pipe(first()).toPromise();
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm);
    if (!searchTerm) {
      this.reloadPage();
    }
  
    this.wordList = this.wordList.filter(currentWord => {
      if (currentWord.word && searchTerm) {
        return (currentWord.word.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        
      }

    });
    
  }
}


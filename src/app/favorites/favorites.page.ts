import { Component, OnInit, NgZone  } from '@angular/core';
import { WordService } from './../services/word.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(public wordService: WordService, private storage: Storage, private zone: NgZone) { }
  public words;
  public wordLista=[];
  public favs;
  async ngOnInit() {
    
    this.favs = await this.getAllFavorites();
  }

getAllFavorites() {
  var promise = new Promise((resolve, reject) => {
    this.storage.forEach((value, key, index) => {
      var values =[value, key]
      this.wordLista.push(values);
    }).then((d) => {
      resolve(this.wordLista);
    });
  });
  return promise;
}
reloadPage() { 
  this.zone.runOutsideAngular(() => {
      location.reload();
  });
}
deleteItem(key){
  this.storage.remove(key);
  this.reloadPage();
}
}

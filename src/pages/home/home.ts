import { FriendListPage } from './../book-list/book-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showFriendList(categoryName:string){
    this.navCtrl.push(FriendListPage,
      {category:categoryName}
      );
  }

}

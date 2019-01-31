
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendlistPage } from '../friendlist/friendlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showFriendList(classRoom:string){
    this.navCtrl.push(FriendlistPage,
      {classroom:classRoom}
      );
  }

}

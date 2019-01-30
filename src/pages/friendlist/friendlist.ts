import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FrienddeteilPage } from '../frienddeteil/frienddeteil';

/**
 * Generated class for the FriendlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
    this.friendrest.getfriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.classroom === this.classroom);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  showDetail(studentid:number){
    this.navCtrl.push(FrienddeteilPage,
      {studentid:studentid}
    );
  }
  

}

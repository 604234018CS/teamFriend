import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friend.model';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';

/**
 * Generated class for the FrienddeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frienddeteil',
  templateUrl: 'frienddeteil.html',
})
export class FrienddeteilPage {

  studentid:number;
  Friend:Friend;
  

  constructor(public friendrest:FriendrestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentid=this.navParams.get("studentid");
    this.friendrest.getfriendList().subscribe(data=>{
      this.Friend=data.filter(friend => friend.studentid === this.studentid)[0];
    })
  }


  ionViewDidLoad() {
    this.studentid=this.navParams.get("studentid");
    console.log(this.studentid);
  }

  goBack(){
    this.navCtrl.pop();
  }

}

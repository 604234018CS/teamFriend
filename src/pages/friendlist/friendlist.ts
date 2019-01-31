import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FrienddeteilPage } from '../frienddeteil/frienddeteil';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../models/friend.model';


@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  Friends:Friend;
  classroom:string;

  constructor(public friendrest:FriendrestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
    this.friendrest.getfriendList().subscribe(data=>{
      this.Friends=data.filter(friends => friends.classroom === this.classroom);
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

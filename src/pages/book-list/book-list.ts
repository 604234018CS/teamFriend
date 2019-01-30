import { FriendDetailpage, } from './../frienddetail/frienddetail';
import { FriendrestProvider, } from './../../providers/friendrest/friendrest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friend.model';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { FrienddeteilPage } from '../frienddeteil/frienddeteil';



@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  friend:Friend;
  classroom:string;

  constructor(private friendrest:FriendRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
    this.friendrest.getfriendList().subscribe(data=>{
      this.friend=data.filter(Friend => Friend.category === this.classroom);
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/friend.model';

/*
  Generated class for the FriendrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendrestProvider {

  private url:string= "https://raw.githubusercontent.com/604234031cs/dataFriend/master/newjson.json"
  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

  getfriendList():Observable<any>{
    return this.http.get<Friend>(this.url);

  }
}

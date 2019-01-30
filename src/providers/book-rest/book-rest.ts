import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/friend.model';



@Injectable()
export class FriendRestProvider {

  private url:string="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestProvider Provider');
  }


    getfriendList():Observable<any>{
      return this.http.get<Friend>(this.url);

    }



}

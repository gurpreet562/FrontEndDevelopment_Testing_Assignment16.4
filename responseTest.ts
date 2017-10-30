import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx"
import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  private api = "your_api_url";

  constructor(private http: Http) {

  }

  toSaveItem(item) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.api + '/items', { item: item })
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // The err.statusText is empty if server down (err.type === 3)
          console.log((err.statusText || "Can't join the server."));
          // Really usefull. The app can't catch this in "(err)" closure
          reject((err.statusText || "Can't join the server."));
          // This return is required to compile but unuseable in your app
          return Observable.throw(err);
        })
        // The (err) => {} param on subscribe can't catch server down error so I keep only the catch
        .subscribe(data => { resolve(data) })
    })
  }

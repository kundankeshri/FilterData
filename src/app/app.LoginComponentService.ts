import { Component, Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginComponentService {
 constructor(private http:Http) { }
  getName()  {
       return "Hello Kundan Keshri";
  }

  getDetails():any{

        return this.http.get('/api/userDetails').toPromise().then(
                response => response.json()
            ).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }
}

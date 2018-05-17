import { Component, Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SummaryComponentService {
 constructor(private http:Http) { }

   private handleError(error: any): Promise<any> {
           console.error('An error occurred', error); // for demo purposes only
           return Promise.reject(error.message || error);
       }
}

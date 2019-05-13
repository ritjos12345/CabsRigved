import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Driver } from './driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _url: string = "http://localhost:3000/travelRequests";
  private _urld: string = "http://localhost:3000/drivers";
  constructor(private http: HttpClient) { }
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this._url);
  }

  getDriverdetails(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this._urld);
  }
}

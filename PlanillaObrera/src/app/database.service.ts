import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Employee } from './Interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:5000/getAllEmployees');
    
  }

  // async getAllEmployees(){
  //   return await this.http.get<Employee[]>('http://localhost:5000/getAllEmployees').toPromise();
  // }

}

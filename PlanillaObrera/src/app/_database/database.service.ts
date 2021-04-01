import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Administrator } from '../Interfaces/Administrator';
import { Employee } from '../Interfaces/Employee';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  host: string = 'http://localhost:5000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}
//  Gets----------------------------------------------------
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:5000/getAllEmployees');
    
  }
  getAllAdministrators(): Observable<Administrator[]>{
    return this.http.get<Administrator[]>('http://localhost:5000/getAll');
  }

  getLogInValidation(){
    return this.http.get('http://localhost:5000/checkAuth')
  }


//  Post----------------------------------------------------
  validateAdministrator(admin: Administrator){
    this.http.post('http://localhost:5000/adminAuth',admin).subscribe();
  }
}

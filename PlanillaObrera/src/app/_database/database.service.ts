import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Administrator } from '../_models/Administrator';
import { Employee } from '../_models/Employee';

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
  getAllAdministrators(): Observable<Administrator[]>{
    return this.http.get<Administrator[]>('http://localhost:5000/getAll');
  }

  getLogInValidation(){
    return this.http.get('http://localhost:5000/checkAuth')
  }


//  Post----------------------------------------------------
  selectEmployees(search: string){
    return this.http.post<Employee[]>(`${environment.apiUrl}/users/authenticate`, search).pipe()
  }

}

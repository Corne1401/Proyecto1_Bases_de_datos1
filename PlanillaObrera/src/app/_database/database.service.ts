import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Job } from '../_models/Job';
import { Employee } from '../_models/Employee';
import { Department } from '../_models/Department';
import { IdentityDocumentType } from '../_models/IdentityDocumentType';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}
//  Gets----------------------------------------------------
  getAllEmployees(){
    return this.http.get<Employee[]>(`${environment.apiUrl}/db/getAllEmployees`)
  }
  getAllJobs(){
    return this.http.get<Job[]>(`${environment.apiUrl}/db/getAllJobs`)
  }

  getAllDepartments(){
    return this.http.get<Department[]>(`${environment.apiUrl}/db/getAllDepartments`)
  }

  getAllIdentityDocumentTypes(){
    return this.http.get<IdentityDocumentType[]>(`${environment.apiUrl}/db/getAllIdentiryDocumentType`)
  }



//  Post----------------------------------------------------
  selectEmployees(search: string){
    console.log(search);
    return this.http.post<Employee[]>(`${environment.apiUrl}/db/selectEmployees`, {search}).pipe()
  }

  deleteEmployee(Id: number){
    return this.http.post<Employee[]>(`${environment.apiUrl}/db/deleteEmployee`, {Id}).pipe()
  }

}

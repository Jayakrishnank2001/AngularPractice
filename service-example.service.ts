import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {

  constructor(private http:HttpClient) { }
 
  getEmployees(data:any){
    return this.http.post<any>('http://localhost:4000',data)
  }
  
}

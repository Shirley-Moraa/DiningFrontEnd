import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeniorService {

  private baseUrl = 'http://localhost:8080/springboot-dms-rest/api/v1/seniors';

  constructor(private http: HttpClient) { }

  getSenior(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSenior(senior: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, senior);
  }

  updateSenior(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSenior(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSeniorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

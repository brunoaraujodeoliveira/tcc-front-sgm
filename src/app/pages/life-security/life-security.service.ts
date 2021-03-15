import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifeSecurityService {

  private baseUrl = 'https://tcc-gateway.herokuapp.com/api/integracao/sincronismo';

  constructor(private http: HttpClient) { }

  dataSyncronism(): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${this.baseUrl}`, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
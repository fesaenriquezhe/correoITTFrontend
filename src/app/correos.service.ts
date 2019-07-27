import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CorreosService {

  constructor(private http: HttpClient) { }

  getAuthorById(correos){
    return this.http.get("http://localhost:3000/api/v1/correo/"+correos);
  }
}

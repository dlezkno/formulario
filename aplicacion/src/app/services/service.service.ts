import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ServiceService {
  header:HttpHeaders = new HttpHeaders().set('Content-Type','application/json;charset=utf-8');
  url:string = environment.url_cservice;
  constructor(private http: HttpClient){

  }

  getLi(){
    return this.http.get(this.url+'/li', { headers: this.header }).map( resp =>{
      return resp;
    });
  }

  getData($data){
    let data = JSON.stringify($data)
    return this.http.post(this.url+'/form', data, {headers:this.header}).map(resp =>{
      return resp;
    });
  }

}

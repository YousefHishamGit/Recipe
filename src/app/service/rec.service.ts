import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecService {

  constructor(private httpClient:HttpClient) { }

  getList():Observable<any>{
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  }
  getData():Observable<any>{
    return   this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
  }
  getSpecificData(id:string):Observable<any>{
    return   this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}

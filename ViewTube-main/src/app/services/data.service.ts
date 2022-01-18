import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:44373/";

  constructor(private httpClient: HttpClient) { }
  public sendPostRequest(reqBody, url) {
    return this.httpClient.post(this.REST_API_SERVER + url ,reqBody);
  }

  get(url) {
    return this.httpClient.get(this.REST_API_SERVER + url)
  }
  deleteFav(id):any
  {
    return this.httpClient.delete(this.REST_API_SERVER+'api/favorites/'+id);
  }

  }


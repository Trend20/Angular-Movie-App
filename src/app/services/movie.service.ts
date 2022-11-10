import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api_key: string = environment.API_KEY;
  api_url: string ="http://www.omdbapi.com/?"

  constructor(private http: HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(`${this.api_url}&s=terminator${this.api_key}`)
  }
}

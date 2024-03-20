import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  //variables
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';
  private query!: string;

  constructor(private http: HttpClient) { }

  searchGifs(query: string): Observable<any> {
    this.query = query;
    return this.getGifs();
  }

  private getGifs(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`;
    return this.http.get(url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {
apiKey="AIzaSyAn5x_YS4L2FOerNuieWbn39VDwOQj-dO8"
baseUrl = "https://www.googleapis.com/youtube/v3/"
  constructor(private http:HttpClient) {}
  getVideosCategories(): Observable<any> {
    const apiUrl = `${this.baseUrl}videoCategories?part=snippet&regionCode=in&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }
  getPopularVideos(): Observable<any> {
    const apiUrl = `${this.baseUrl}videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=100&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }

  getVideosByCategory(categoryId: any): Observable<any> {
    const apiUrl = `${this.baseUrl}videos?part=snippet&regionCode=in&maxResults=10&videoCategoryId=${categoryId}&chart=mostPopular&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }
  searchVideos(searchKey: any): Observable<any> {
    const apiUrl = `${this.baseUrl}search?part=snippet&maxResults=10&q=${searchKey}&key=${this.apiKey}`
    return this.http.get(apiUrl)
  }
  
}

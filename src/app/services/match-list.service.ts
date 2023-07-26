import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchListService {
  constructor(private http: HttpClient) {}

  public getLiveData(): Observable<any> {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live';
    
    return this.http.get(url,{
      headers: {
        'X-RapidAPI-Key': '1b127663f4msh17690bec25559c0p12d18ejsnfbe3ca58d07a',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
      withCredentials: true,
      });
  }

  public getTopStories(): Observable<any> {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
    
    return this.http.get(url,{
      headers: {
        'X-RapidAPI-Key': '1b127663f4msh17690bec25559c0p12d18ejsnfbe3ca58d07a',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
      withCredentials: true,
      });
  }

  public getImageById(imageId: string): Observable<any> {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c' + imageId +'/i.jpg?p=de&d=high';
    
    return this.http.get(url,{
      headers: {
        'X-RapidAPI-Key': '1b127663f4msh17690bec25559c0p12d18ejsnfbe3ca58d07a',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
      withCredentials: true,
      responseType: 'blob',
      });
  }

  public getRanking(playerType: string,formatType: string): Observable<any> {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/' + formatType + '?formatType='+ playerType;
    return this.http.get(url,{
      headers: {
        'X-RapidAPI-Key': '1b127663f4msh17690bec25559c0p12d18ejsnfbe3ca58d07a',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
      withCredentials: true,
      });
  }
}

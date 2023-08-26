import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater } from './theater.model'; // Import the Theater interface
import { Showtime } from './showtime'; // Import the Showtime interface

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://cpsu-test-api.herokuapp.com/api/camt2023/';

  constructor(private http: HttpClient) {}

  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.baseUrl + 'theaters');
  }

  getTheaterById(theaterId: number): Observable<Theater> {
    return this.http.get<Theater>(this.baseUrl + 'theaters/' + theaterId);
  }

  getShows(): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(this.baseUrl + 'shows');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater } from './theater.model';
import { Showtime } from './showtime';
import { Movie } from './movie.model';

@Injectable()
export class RestDataSource {
  private baseUrl = 'https://cpsu-test-api.herokuapp.com/api/camt2023/';

  constructor(private http: HttpClient) {}

  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.baseUrl + 'theaters');
  }

  getShows(): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(this.baseUrl + 'shows');
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + `movies/${id}`);
  }
}

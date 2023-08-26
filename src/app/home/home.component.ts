import { Component, OnInit } from '@angular/core';
import { Theater } from '../model/theater.model';
import { Showtime } from '../model/showtime';
import { ApiService } from '../model/app.service'; // Import the ApiService class


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  theaters: Theater[] = [];
  showtimes: Showtime[] = [];
  selectedTheater!: Theater;
  selectShowtime!: Showtime;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchTheaters();
  }

  fetchTheaters(): void {
    this.apiService.getTheaters().subscribe(
      (data) => {
        this.theaters = data;
        this.selectedTheater = data[0];
        this.fetchShowtimes(); // Fetch showtimes after fetching theaters
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  fetchShowtimes(): void {
    this.apiService.getShows().subscribe(
      (data) => {
        this.showtimes = data;
        const matchingShowtime = this.showtimes.find(showtime => showtime.theater === this.selectedTheater.id);

        if (matchingShowtime) {
          this.selectShowtime = matchingShowtime;
          console.log(this.selectShowtime.id); // Log the ID of the selected showtime
        } else {
          console.log('No matching showtime found for the selected theater.');
        }
      },
      (error) => {
        console.error('An error occurred while fetching showtimes:', error);
      }
    );
  }


  displayTheater(theater: Theater): void {
    this.selectedTheater = theater;
    const matchingShowtime = this.showtimes.find(showtime => showtime.theater === this.selectedTheater.id);

    if (matchingShowtime) {
      this.selectShowtime = matchingShowtime;
      console.log(this.selectShowtime.id); // Log the ID of the selected showtime
    } else {
      console.log('No matching showtime found for the selected theater.');
    }
  }

  getShowtimesForSelectedTheater(): any[] {
    return this.showtimes.filter(showtime => showtime.theater === this.selectedTheater?.id);
  }
}

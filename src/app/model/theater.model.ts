import { Movie } from "./movie.model";

export class Theater {
    constructor(
        public id: number,
        public name: string,
        public movie: Movie,
        public seatPrice: number,
        public seatData: { numRows: number, numSeatsPerRow: number }
    ) {}
}
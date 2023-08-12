import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [
      {
        imageLink : 'https://m.media-amazon.com/images/M/MV5BMDg1NWZlNGYtNDg1MS00YTkxLWE5YTgtMzJmMzc0MDVmYmM5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
         title : 'Ayyappanum koshiyum',
         score: 4.8,
         rating: '★★★★★'
      },
      {
        imageLink : 'https://m.media-amazon.com/images/M/MV5BMGY3NDIyMTMtYjZmMy00MzgyLThiMDUtYTc1OWE5N2Y0NDYxXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg',
         title : 'Joseph',
         score: 4.7,
         rating: '★★★★★'
      },
      {
        imageLink : 'https://upload.wikimedia.org/wikipedia/en/5/57/Agantuk_poster.jpg',
         title : 'Agantuk',
         score: 3.9,
         rating: '★★★'
      },
      {
        imageLink : 'https://upload.wikimedia.org/wikipedia/en/f/f2/Kahaani_poster.jpg',
         title : 'kahani',
         score: 5.0,
         rating: '★★★★★'
      },
      {
        imageLink : 'https://m.media-amazon.com/images/M/MV5BZWFhZjBjY2ItMmZmMC00N2RjLTg2ZjktNDUwNmYwNmVjMDA5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg',
         title : '2018',
         score: 4.8,
         rating: '★★★★'
      },
      {
        imageLink : 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/jailer-2023/large_jailer-movie-poster-2023.jpg',
         title : 'Jailer',
         score: 4.8,
         rating: '★★★★★'
      },
      {
        imageLink : 'https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg',
         title : 'Lagaan',
         score: 4.8,
         rating: '★★★★'
      }
      ,
      {
        imageLink : 'https://www.tvguide.com/a/img/catalog/provider/1/3/1-4108831664.jpg',
         title : 'Mangal Pandey',
         score: 4.8,
         rating: '★★★★★'
      }
  ]

  constructor() { 
  }

  ngOnInit() {
  }

}

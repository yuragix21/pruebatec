import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  gifs: any;
  searchQuery: string = '';
  notFound = false;
  limit = 8;
  searchHistory: string[] = [];

  constructor(private service: GiphyService) { }

  ngOnInit() { }

  searchGifs() {
    if (this.searchQuery.trim() !== '') {
      const searchTerm = this.searchQuery.trim(); 
      this.service.searchGifs(searchTerm)
        .subscribe(results => {
          this.gifs = results.data.slice(0, this.limit);
          this.addToHistory(searchTerm);
        }, error => {
          console.error('Error al buscar gifs:', error);
          this.notFound = true;
        });
      this.searchQuery = ''; 
    }
  }

  addToHistory(term: string) {
    if (!this.searchHistory.includes(term)) {
      this.searchHistory.unshift(term);
      if (this.searchHistory.length > 5) {
        this.searchHistory.pop();
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  implements OnInit{

  gifs: any;
  searchQuery!: string;
  notFound = false;
  limit = 8;

  constructor(private service: GiphyService) {}

  ngOnInit() {}

  searchGifs() {
    this.service.searchGifs(this.searchQuery)
      .subscribe(results => {
        this.gifs = results.data.slice(0, this.limit);
        console.log(this.gifs);
      }, error => {
        console.error('Error al buscar gifs:', error);
        this.notFound = true;
      });
    this.searchQuery = '';
  }


  

}

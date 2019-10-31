import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared/shared.service';

@Component({
  selector: 'app-films-detalhe',
  templateUrl: './films-detalhe.component.html',
  styleUrls: ['./films-detalhe.component.scss']
})
export class FilmsDetalheComponent implements OnInit {

  allFilms: Array<any> = []



  constructor(private filmsService: SharedService) { }


  ngOnInit() {
    this.listar()
  }

  listar() {
    this.filmsService.listar().subscribe(dados => this.allFilms = dados)
  }

}

import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  capitales: Country[] = [];
  hayError: boolean = false;

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital(this.termino)
    .subscribe(capitales => {
      this.capitales = capitales;
    },(err) =>{
      this.hayError = true;
      this.capitales = [];
    })
  }

}

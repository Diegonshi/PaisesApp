import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
  `]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
  }

  activaRegion(region: string){
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisesService.buscarRegion(region)
    .subscribe( paises =>{ this.paises = paises});
  }

  getClassCSS(region: string){
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}

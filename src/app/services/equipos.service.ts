import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  equipo: Equipo;
  arrayEquipos: Array<Equipo>;
  equipoBuscar: string;

  constructor() {

   this.arrayEquipos = [ new Equipo('zz', 'zz2', 23, 1978, 'http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif'),
                         new Equipo('cc', 'cc2', 230, 1990, 'http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif'),
                         // tslint:disable-next-line: max-line-length
                         new Equipo('aa', 'aa2', 25000, 2015, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
                         new Equipo('bb', 'bb2', 1200, 1980, 'http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif') 
                       ];
   this.equipoBuscar = '';

  }
  addEquipo(equipo: Equipo) {
    this.arrayEquipos.push(equipo);
}
}

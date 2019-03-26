import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipos/equipo';
import { Jugador } from './jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor() { }
  arrayEquipos: Array<Equipo>;
  equipoBuscar: string;
  arrayJugadores: Array<Jugador>;
  jugadorBuscar: string;

  ngOnInit() {
    console.log('JugadoresComponent ngOnInit');
    this.arrayJugadores = [
        new Jugador('Pepe', 'Viruela', 'Otilio', 23 , 'Getafe'),
        new Jugador('Paco', 'Ciruela', 'Garrido', 28 , 'Getafe'),
        new Jugador('Juan', 'Dolores', 'Cansino', 19 , 'Getafe')
    ];
    this.arrayEquipos = [ new Equipo('zz', 'zz2', 23, 1978, 'http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif'),
                         new Equipo('cc', 'cc2', 230, 1990, 'http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif'),
// tslint:disable-next-line: max-line-length
                         new Equipo('aa', 'aa2', 25000, 2015, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
                         new Equipo('bb', 'bb2', 1200, 1980, 'http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif') ];
    this.jugadorBuscar = '';
  }

}

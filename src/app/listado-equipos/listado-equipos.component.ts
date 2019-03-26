import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../equipos/equipo';
import { EquiposService } from '../services/equipos.service';

@Component({
  selector: 'app-listado-equipos',
  templateUrl: './listado-equipos.component.html',
  styleUrls: ['./listado-equipos.component.css']
})
export class ListadoEquiposComponent implements OnInit {

  @Input()  arrayEquipos: Array<Equipo>;
  @Output() evtEmmiter: EventEmitter<Equipo> = new EventEmitter<Equipo>();
  equipo: Equipo;
  equipoBuscar: string;

  constructor( private equiposService: EquiposService ) { }

  ngOnInit() {
    console.log ('ListadoEquiposComponent ngOnInit');
   // this.equipo = new Equipo ('', '', null, null, null);
   // this.arrayEquipos = [ new Equipo('zz', 'zz2', 23, 1978, 'http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif'),
   //                       new Equipo('cc', 'cc2', 230, 1990, 'http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif'),
 // tslint:disable-next-line: max-line-length
    //                      new Equipo('aa', 'aa2', 25000, 2015, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
    //                      new Equipo('bb', 'bb2', 1200, 1980, 'http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif') ];
    this.arrayEquipos = this.equiposService.arrayEquipos;
    this.equipoBuscar = '';
  }

  detalleEquipo(equipo: Equipo) {
    if (equipo !== null) {
      console.log('Nombre del equipo ListadoEquiposComponent: ' + equipo.nombre);
      this.equipo = equipo;
    } else {
      console.log('Equipo null ListadoEquiposComponent ');
      this.equipo = new Equipo ('', '', null, null, null);
    }
    this.evtEmmiter.emit(this.equipo);
  }

  setStyle(equipo: Equipo) {
    //console.log('Listado Equipos setStyle');
    return {
      masde1000: equipo.socios > 1000 ? true : false ,
      menosde1000:  equipo.socios < 1000 ? true : false
    };
  }

  deleteEquipo(equipo: Equipo) {
    console.log ('deleteEquipo: ' + equipo.nombre);
    //this.arrayEquipos.find(equipo)
    /*let found = this.arrayEquipos.find(function (equipo) {
      return element > 10;
    });*/
  }


}

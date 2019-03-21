import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../equipos/equipo';

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

  constructor() { }

  ngOnInit() {
    console.log ('ListadoEquiposComponent ngOnInit');
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

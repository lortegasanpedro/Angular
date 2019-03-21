import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Pipe({
  name: 'buscar',
  pure: false
})
export class BuscarPipe implements PipeTransform {

  transform(arrayEquipos: Array<Equipo>, equipoBuscar: string): Array<Equipo> {

    console.log ('BuscarPipe EquipoBuscar: ' + equipoBuscar + ' Array Equipos: ' + arrayEquipos);

    if (equipoBuscar && equipoBuscar !== '') {
      return arrayEquipos.filter(equipo => equipo.nombre.toLowerCase().indexOf(equipoBuscar.toLowerCase()) !== -1);
    } else {
      return arrayEquipos;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Pipe({
  name: 'priorizar',
  pure: false
})
export class PriorizarPipe implements PipeTransform {

  transform(equipos: Array<Equipo>, args?: any): any {
    return equipos.sort( (a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
}

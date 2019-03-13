import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  constructor( private formBuilder: FormBuilder ) { }
  equipo: Equipo;
  arrayEquipos: Array<Equipo>;
  equipoBuscar: string;
  public formulario: FormGroup;

  ngOnInit() {
   this.equipo = new Equipo ('', '', null, null, null);
   this.arrayEquipos = [ new Equipo('zz', 'zz2', 23, 1978, 'http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif'),
                         new Equipo('cc', 'cc2', 230, 1990, 'http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif'),
// tslint:disable-next-line: max-line-length
                         new Equipo('aa', 'aa2', 25000, 2015, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
                         new Equipo('bb', 'bb2', 1200, 1980, 'http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif') ];
   this.equipoBuscar = '';
   this.buildForm();
   console.log('EquiposComponent.ngOnInit');
  }

  private buildForm(){
      this.formulario = this.formBuilder.group({
        nombreEquipo: '',
        ciudadEquipo: '',
        sociosEquipo: null,
        agnoFundacionEquipo: null,
        escudoURLEquipo: null,
      });
  }

  addEquipo() {
    if (!this.checkVacio(this.equipo)) {
      this.arrayEquipos.push(this.equipo);
      this.equipo = new Equipo ('', '', null, null, null);
    }
    //console.log(this.arrayEquipos);
  }

  deleteEquipo(equipo: Equipo) {
    console.log ('deleteEquipo: ' + equipo.nombre);
    //this.arrayEquipos.find(equipo)
    /*let found = this.arrayEquipos.find(function (equipo) {
      return element > 10;
    });*/

  }
  setStyle(equipo: Equipo) {
    return {
      masde1000: equipo.socios > 1000 ? true : false ,
      menosde1000:  equipo.socios < 1000 ? true : false
    };
  }

  detalleEquipo(equipo: Equipo) {
    
    if (equipo !== null) {
      console.log('Nombre del equipo: ' + equipo.nombre);
      this.equipo = equipo;
    } else {
      console.log('Equipo null ');
      this.equipo = new Equipo ('', '', null, null, null);
    }
  }

  

  private checkVacio(equipo: Equipo): boolean {
    let ret: boolean;
    ret = false;
    if (equipo.nombre === '' ||
        equipo.ciudad === '' ||
        equipo.socios === null ||
        equipo.agnoFundacion === null) {
            ret = true;
        }
    return ret;
  }
}

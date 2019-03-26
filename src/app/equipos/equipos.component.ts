import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquiposService } from '../services/equipos.service';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
               private equiposService: EquiposService ) { }
  equipo: Equipo;
  arrayEquipos: Array<Equipo>;
  //equipoBuscar: string;
  public formulario: FormGroup;

  ngOnInit() {
   this.equipo = new Equipo ('', '', null, null, null);
   //this.arrayEquipos = [ new Equipo('zz', 'zz2', 23, 1978, 'http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif'),
    //                     new Equipo('cc', 'cc2', 230, 1990, 'http://elmiradorespagnol.free.fr/futbol/original/Atletico%20de%20Madrid.gif'),
// tslint:disable-next-line: max-line-length
   //                      new Equipo('aa', 'aa2', 25000, 2015, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
   //                      new Equipo('bb', 'bb2', 1200, 1980, 'http://elmiradorespagnol.free.fr/futbol/original/Sevilla.gif') ];
   //this.arrayEquipos = this.equiposService.arrayEquipos;
   //this.equipoBuscar = '';
   this.buildForm();
   console.log('EquiposComponent.ngOnInit');
  }

  private buildForm(){
      this.formulario = this.formBuilder.group({
        nombreEquipo: ['', Validators.required],
        ciudadEquipo: ['', Validators.required],
        sociosEquipo: [null, [Validators.required, Validators.min(1)]],
        agnoFundacionEquipo: [null, [Validators.required, Validators.min(1900)]],
        escudoURLEquipo: null,
      });
  }

  addEquipo() {
    console.log('Add Equipo Status: ' + this.formulario.status);
    if (this.formulario.valid) {
      console.log('Formulario Valido');
    /*if (!this.checkVacio(this.formulario)) {*/
      let equipo: Equipo;
      equipo = new Equipo (this.formulario.get('nombreEquipo').value, 
                           this.formulario.get('ciudadEquipo').value, 
                           this.formulario.get('sociosEquipo').value,
                           this.formulario.get('agnoFundacionEquipo').value,
                           this.formulario.get('escudoURLEquipo').value);
      
      this.equiposService.addEquipo(equipo);
      //this.arrayEquipos.push(equipo);
      this.formulario.reset();
    }
  }

  recogerInfo(equipo: Equipo) {
    console.log('Recoger Info' + equipo);
    this.equipo = Object.assign({}, equipo);
}
 


  /*private checkVacio(formulario: FormGroup ): boolean {
    let ret: boolean;
    ret = false;
    console.log ('check vacio: ' + formulario);
    if (formulario.get('nombreEquipo').value === '' ||
        formulario.get('ciudadEquipo').value === '' ||
        formulario.get('sociosEquipo') === null ||
        formulario.get('agnoFundacionEquipo') === null) {
        ret = true;
    }
    return ret;
  }*/
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from '../equipos/equipos.component';
import { JugadoresComponent } from '../jugadores/jugadores.component';

const routes: Routes = [
  {
      path: '',
      component: EquiposComponent,
  },
  {
    path: 'jugadores',
    component: JugadoresComponent,
  }

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

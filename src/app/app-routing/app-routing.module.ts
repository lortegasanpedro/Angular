import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from '../equipos/equipos.component';
import { JugadoresComponent } from '../jugadores/jugadores.component';

const routes: Routes = [
  {
    path: 'equipos',
    component: EquiposComponent,
},
{
  path: 'jugadores',
  component: JugadoresComponent,
},
{
  path: '',
  redirectTo: 'equipos', pathMatch : 'full'
},
{
  path: '**',
  component: EquiposComponent
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

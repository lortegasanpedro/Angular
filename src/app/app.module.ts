import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { PriorizarPipe } from './pipes/prriorizar.pipe';
import { BuscarPipe } from './pipes/buscar.pipe';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    PriorizarPipe,
    BuscarPipe,
    JugadoresComponent,
    ListadoEquiposComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

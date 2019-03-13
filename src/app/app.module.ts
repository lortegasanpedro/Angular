import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { PriorizarPipe } from './pipes/prriorizar.pipe';
import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    PriorizarPipe,
    BuscarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

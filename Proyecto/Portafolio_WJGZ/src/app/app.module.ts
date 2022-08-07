import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { LogrosComponent } from './components/logros/logros.component';
//import {LayoutModule} from './layout/layout.module';



@NgModule({
  declarations: [
    AppComponent,
    
    IniciarSesionComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ExperienciaComponent,
    EducacionComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

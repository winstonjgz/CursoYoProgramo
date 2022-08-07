import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasItemComponent } from './components/tareas-item/tareas-item.component';
import { AddTareasComponent } from './components/add-tareas/add-tareas.component';

const appRoutes:Routes = [
  {path: '', component: TareasComponent}
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    TareasComponent,
    TareasItemComponent,
    AddTareasComponent,
    
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot appRoutes, {enableTracing: true}
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

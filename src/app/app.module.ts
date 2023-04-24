import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootComponent } from './foot/foot.component';
import { AppRouterModule } from './app-router.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    NaoEncontradoComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

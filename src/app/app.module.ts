import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InstalacionesComponent } from './pages/instalaciones/instalaciones.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    InstalacionesComponent,
    LoginComponent,
    RegistroComponent,
    ReservasComponent,
    ServiciosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

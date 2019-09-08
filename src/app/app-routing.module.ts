import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InstalacionesComponent } from './pages/instalaciones/instalaciones.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

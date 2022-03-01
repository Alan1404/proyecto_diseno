import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './componets/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './componets/dashboard/cuestionarios/cuestionarios.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent, children: [
    { path: '', component: BienvenidaComponent},
    { path : 'Register', component: RegisterComponent},
    { path: 'Login', component: LoginComponent},
  ] },
  { path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: CuestionariosComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent } 
  ] },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

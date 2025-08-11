import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { FormClientesComponent } from './components/form-clientes/form-clientes.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, authMatch } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent, canMatch: [authMatch] },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-producto', component: FormProductosComponent, canActivate: [authGuard] },
  { path: 'crear-cliente', component: FormClientesComponent, canActivate: [authGuard] },
  { path: 'editar-producto/:id', component: EditarProductoComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

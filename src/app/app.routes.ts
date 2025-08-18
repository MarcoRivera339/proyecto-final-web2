import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FacturaPreviaComponent } from './components/factura-previa/factura-previa.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'factura', component: FacturaPreviaComponent },
  { path: 'crear-producto', component: FormProductosComponent },
  { path: 'crear-usuario', component: FormUserComponent},
  { path: 'editarProducto/:id', component: EditarProductoComponent },
  { path: '**', redirectTo: '' }
];
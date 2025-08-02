import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { FormClientesComponent } from './components/form-clientes/form-clientes.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'crear-producto', component: FormProductosComponent },
    { path: 'crear-cliente', component: FormClientesComponent },
    { path: 'editar-producto/:id', component: EditarProductoComponent },

];
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'productos',component:ProductosComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'registro',component:RegistroComponent},
];
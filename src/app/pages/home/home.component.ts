import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { NOVEDADESComponent } from '../../components/novedades/novedades.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, BannerComponent, NOVEDADESComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

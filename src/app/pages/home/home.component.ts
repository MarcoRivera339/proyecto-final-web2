import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { NOVEDADESComponent } from '../../components/novedades/novedades.component';
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { HomeStatsComponent } from "../../components/home-stats/home-stats.component";
import { FeaturesStripComponent } from "../../components/features-strip/features-strip.component";
import { CategoriesGridComponent } from "../../components/categories-grid/categories-grid.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FooterLiteComponent } from "../../components/footer-lite/footer-lite.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, HeroBannerComponent, HomeStatsComponent, FeaturesStripComponent, CategoriesGridComponent, TestimonialsComponent, FooterLiteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

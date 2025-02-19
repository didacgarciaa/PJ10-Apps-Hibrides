import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficGastPersonaComponent } from '../grafic-gast-persona/grafic-gast-persona.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GraficGastPersonaComponent,HeaderComponent,FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })), 
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('0.6s ease-out'))
    ])
  ]
})
export class LandingComponent implements AfterViewInit {
  inViewStates: boolean[] = []; 
  @ViewChildren('animContainer') animContainers!: QueryList<ElementRef>; 

  ngAfterViewInit(): void { 
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = this.animContainers.toArray().findIndex(el => el.nativeElement === entry.target);
        if (entry.isIntersecting && index !== -1) {
          this.inViewStates[index] = true; 
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 });

    this.animContainers.forEach((element, index) => {
      this.inViewStates[index] = false; 
      observer.observe(element.nativeElement);
    });
  }
}

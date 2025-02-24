import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficGastPersonaComponent } from '../grafic-gast-persona/grafic-gast-persona.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GraficGastPersonaComponent,HeaderComponent,FooterComponent, RouterLink ],
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

  temas = [
    {
      titulo: 'Inversió',
      cuerpo: 'La inversió és clau per garantir el creixement sostenible i maximitzar els beneficis a llarg termini. Una bona estratègia d’inversió permet mitigar riscos i aprofitar oportunitats en diferents mercats, millorant així la rendibilitat de l’entitat o persona que l’adopti.',
      link: '/inversio',
      imagen: 'inversio.png' 
    },
    {
      titulo: 'Potabilitat',
      cuerpo: 'Els processos de tractament de l’aigua asseguren la seva qualitat i eliminen els contaminants per a un ús segur. Aquests processos impliquen una sèrie de tècniques d’anàlisi i purificació que garanteixen que l’aigua compleixi amb els estàndards de seguretat i qualitat, evitant problemes de salut pública.',
      link: '/potabilitat',
      imagen: 'gota.png'  
    },
    {
      titulo: 'Despesa',
      cuerpo: 'Una bona gestió de la despesa permet mantenir l’equilibri financer i optimitzar els recursos disponibles. Implementar controls rigorosos sobre la despesa ajuda a evitar despeses innecessàries i a dirigir els recursos cap a àrees de creixement i rendiment òptim.',
      link: '/despeses',
      imagen: 'despeses.png' 
    }
  ];
  
  

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

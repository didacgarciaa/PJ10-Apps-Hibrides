import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsChartComponent } from "../consumpp/ConsumoPorPersona.component";
import { Investment } from '../models/investment.model';
import { InvestmentTitlePipe } from '../pipes/investment-title.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    CommonModule,
    InvestmentsChartComponent,
    InvestmentTitlePipe,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent
    
  ],
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggeredFadeInUp', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class InvestmentsComponent implements OnInit {
  africanInvestments: Investment[] = [];
  globalInvestments: Investment[] = [];

  ngOnInit(): void {
    this.africanInvestments = [
      new Investment(
        "Iniciativa de Purificació d'Aigua a Kenya",
        "Plantes de tractament d'aigua a gran escala que proporcionen aigua potable a 5 milions de residents en zones rurals mitjançant sistemes de purificació amb energia solar.",
        "kenyawater.jpg",
        "Infraestructura d'Aigua",
        "Nairobi, Kenya",
        "En progress",
        undefined,
        undefined,
        120000000
      ),
      new Investment(
        "Projecte de Reg Intel·ligent a Nigèria",
        "Sistemes de reg impulsats per IA que cobreixen 50.000 hectàrees de terreny agrícola, augmentant la producció de cultius en un 40% mentre es redueix el consum d'aigua.",
        "nigeriawater.jpg",
        "Tecnologia Agrícola",
        "Kano, Nigèria",
        "Completat",
        undefined,
        undefined,
        75000000
      ),
      new Investment(
        "Programa de Recollida d'Aigua de Pluja a Rwanda",
        "Iniciativa nacional per instal·lar 100.000 sistemes intel·ligents de recollida d'aigua de pluja en comunitats urbanes i rurals.",
        "rwandawater.jpg",
        "Sostenibilitat",
        "Kigali, Rwanda",
        "En expansió",
        undefined,
        undefined,
        45000000
      )
    ];
    
    this.globalInvestments = [
      new Investment(
        "Fons d'Infraestructura d'Aigua Xina-Àfrica",
        "Inversió de 2.400 milions de dòlars en sistemes de gestió d'aigua transfronterers a 12 nacions africanes. També un nou sistema de regadiu.",
        "chinawater.jpg",
        "Desenvolupament Internacional",
        "Pan-Africà",
        "Actiu",
        "Banc de Desenvolupament de la Xina",
        "chinabank.jpg",
        2400000000
      ),
      new Investment(
        "Iniciativa de Seguretat de l'Aigua de la UE",
        "Programa de 850 milions d'euros de la Unió Europea per a solucions sostenibles d'aigua als països de la regió del Sahel.",
        "europewater.jpg",
        "Resiliència Climàtica",
        "Regió del Sahel",
        "Fase de planificació",
        "Unió Europea",
        "eu.png",
        850000000
      ),
      new Investment(
        "Programa Urbà d'Aigua de l'USAID",
        "Implementació de tecnologies intel·ligents de xarxa d'aigua en 8 grans ciutats africanes per reduir les pèrdues de distribució.",
        "usawater.jpg",
        "Desenvolupament Urbà",
        "Múltiples Ciutats",
        "Implementació",
        "Agència dels Estats Units per al Desenvolupament Internacional",
        "usaid.png",
        325000000
      )
    ];
    
  }
}
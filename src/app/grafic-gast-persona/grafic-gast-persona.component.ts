import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafic-gast-persona',
  imports: [],
  template: `<canvas id="waterUsageChart"></canvas>`,
  styleUrl: './grafic-gast-persona.component.css'
})
export class GraficGastPersonaComponent {
  constructor() {}

  ngOnInit(): void {
    const ctx = document.getElementById('waterUsageChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [2000, 2005, 2010, 2015, 2020, 2025],
        datasets: [
          {
            label: 'North Africa',
            data: [25, 27, 30, 33, 35, 37], 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Sub-Saharan Africa',
            data: [18, 20, 22, 24, 27, 30], 
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Water Usage per Person (2000-2025)'
          }
        },
        scales: {
          x: { title: { display: true, text: 'Years' } },
          y: { title: { display: true, text: 'Liters per Person' } }
        }
      }
    });
  }
}

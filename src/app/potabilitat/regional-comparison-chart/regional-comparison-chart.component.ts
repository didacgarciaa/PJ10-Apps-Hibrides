import { Component, type AfterViewInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Chart } from "chart.js/auto"

@Component({
  selector: "app-regional-comparison-chart",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-8 p-6 bg-[#FFFAEB] rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#73CCD4] pb-2">
        Comparació regional de l'accés a l'aigua potable a l'Àfrica (2020)
      </h2>
      <div class="chart-container" style="position: relative; height:50vh; width:100%">
        <canvas id="regionalComparisonChart"></canvas>
      </div>
    </section>
  `,
  styles: [],
})
export class RegionalComparisonChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart()
  }

  createChart() {
    if (typeof window !== "undefined") {
      const ctx = document.getElementById("regionalComparisonChart") as HTMLCanvasElement
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Nord d'Àfrica", "Àfrica Occidental", "Àfrica Central", "Àfrica Oriental", "Àfrica Meridional"],
          datasets: [
            {
              label: "Percentatge de població amb accés a aigua potable",
              data: [90, 70, 55, 62, 78],
              backgroundColor: "#73CCD4",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: "Percentatge (%)",
                color: "#110E2F"
              },
              ticks: {
                color: "#110E2F"
              }
            },
            x: {
              ticks: {
                color: "#110E2F"
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      })
    }
  }
}
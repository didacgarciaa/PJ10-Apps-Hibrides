import { Component, type AfterViewInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Chart } from "chart.js/auto"

@Component({
  selector: "app-water-access-chart",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-8 p-6 bg-[#FFFAEB] border-2 border-[#E59B50] rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#E59B50] pb-2">
        Evolució de l'accés a l'aigua potable a l'Àfrica
      </h2>
      <div class="chart-container" style="position: relative; height:40vh; width:100%">
        <canvas id="waterAccessChart"></canvas>
      </div>
    </section>
  `,
  styles: [],
})
export class WaterAccessChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart()
  }

  createChart() {
    if (typeof window !== "undefined") {
      const ctx = document.getElementById("waterAccessChart") as HTMLCanvasElement
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2000", "2005", "2010", "2015", "2020"],
          datasets: [
            {
              label: "Percentatge de població amb accés a aigua potable",
              data: [54, 57, 60, 63, 66],
              fill: false,
              borderColor: "#E59B50",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
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
              title: {
                display: true,
                text: "Any",
                color: "#110E2F"
              },
              ticks: {
                color: "#110E2F"
              }
            },
          },
        },
      })
    }
  }
}
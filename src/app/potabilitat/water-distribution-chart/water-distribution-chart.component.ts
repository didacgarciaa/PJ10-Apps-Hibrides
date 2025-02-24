import { Component, type AfterViewInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Chart } from "chart.js/auto"

@Component({
  selector: "app-water-distribution-chart",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-8 p-6 bg-[#FFFAEB] border-2 border-[#73CCD4] rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#E59B50] pb-2">
        Distribució de l'accés a l'aigua potable a l'Àfrica l'any 2020
      </h2>
      <div class="chart-container" style="position: relative; height:40vh; width:100%">
        <canvas id="waterDistributionChart"></canvas>
      </div>
    </section>
  `,
  styles: [],
})
export class WaterDistributionChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart()
  }

  createChart() {
    if (typeof window !== "undefined") {
      const ctx = document.getElementById("waterDistributionChart") as HTMLCanvasElement
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Amb accés", "Sense accés"],
          datasets: [
            {
              data: [66, 34],
              backgroundColor: ["#73CCD4", "#E59B50"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#110E2F"
              }
            },
            title: {
              display: true,
              text: "Percentatge de la població africana",
              color: "#110E2F"
            },
          },
        },
      })
    }
  }
}
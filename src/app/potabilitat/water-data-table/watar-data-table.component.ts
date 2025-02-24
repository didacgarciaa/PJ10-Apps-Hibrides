import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-water-data-table",
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="mb-8 p-6 bg-[#FFFAEB] border-2 border-[#73CCD4] rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#73CCD4] pb-2">
      Dades detallades d'accés a l'aigua a l'Àfrica
    </h2>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-[#FFFAEB] shadow-md rounded">
        <thead class="bg-[#73CCD4]">
          <tr>
            <th class="py-3 px-4 border-b-2 border-[#110E2F]/10 text-[#110E2F]">Any</th>
            <th class="py-3 px-4 border-b-2 border-[#110E2F]/10 text-[#110E2F]">Població amb accés (%)</th>
            <th class="py-3 px-4 border-b-2 border-[#110E2F]/10 text-[#110E2F]">Població sense accés (milions)</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of waterData" class="hover:bg-[#73CCD4]/10 transition-colors">
            <td class="py-2 px-4 border-b border-[#110E2F]/10">{{data.year}}</td>
            <td class="py-2 px-4 border-b border-[#110E2F]/10">{{data.percentage}}%</td>
            <td class="py-2 px-4 border-b border-[#110E2F]/10">{{data.withoutAccess}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`,
  styles: [],
})
export class WaterDataTableComponent {
  waterData = [
    { year: 2000, percentage: 54, withoutAccess: 418 },
    { year: 2005, percentage: 57, withoutAccess: 425 },
    { year: 2010, percentage: 60, withoutAccess: 424 },
    { year: 2015, percentage: 63, withoutAccess: 416 },
    { year: 2020, percentage: 66, withoutAccess: 400 },
  ]
}
import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-water-stats",
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="bg-[#FFFAEB] p-4 rounded-lg text-center border-2 border-[#73CCD4] shadow-md">
      <h3 class="text-2xl font-bold mb-2 text-[#110E2F]">66%</h3>
      <p class="text-[#110E2F]/90">de la població africana amb accés a aigua potable el 2020</p>
    </div>
    <div class="bg-[#FFFAEB] p-4 rounded-lg text-center border-2 border-[#E59B50] shadow-md">
      <h3 class="text-2xl font-bold mb-2 text-[#110E2F]">12%</h3>
      <p class="text-[#110E2F]/90">Augment de l'accés des del 2000</p>
    </div>
    <div class="bg-[#FFFAEB] p-4 rounded-lg text-center border-2 border-[#73CCD4] shadow-md">
      <h3 class="text-2xl font-bold mb-2 text-[#110E2F]">400 milions</h3>
      <p class="text-[#110E2F]/90">Persones encara sense accés a aigua potable segura</p>
    </div>
  </section>
`,
  styles: [],
})
export class WaterStatsComponent {}
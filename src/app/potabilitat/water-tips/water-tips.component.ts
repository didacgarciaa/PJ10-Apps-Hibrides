import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-water-tips",
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="mb-8 p-6 bg-[#FFFAEB] rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#E59B50] pb-2">
      Consells per a la conservació de l'aigua
    </h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li *ngFor="let tip of waterTips" class="p-4 rounded-lg bg-white hover:bg-[#73CCD4]/10 transition-colors shadow-sm">
        <span class="text-[#E59B50] mr-2">•</span>
        <span class="text-[#110E2F]">{{tip}}</span>
      </li>
    </ul>
  </section>
  `,
  styles: [],
})
export class WaterTipsComponent {
  waterTips = [
    "Reparar aixetes i canonades amb fuites",
    "Prendre dutxes més curtes",
    "Utilitzar un capçal de dutxa eficient en aigua",
    "Tancar l'aixeta mentre es raspallen les dents",
    "Utilitzar plantes resistents a la sequera al jardí",
    "Recollir i utilitzar aigua de pluja per regar les plantes",
    "Només fer servir rentadores i rentavaixelles amb càrrega completa",
    "Instal·lar sistemes de reg eficients",
  ]
}
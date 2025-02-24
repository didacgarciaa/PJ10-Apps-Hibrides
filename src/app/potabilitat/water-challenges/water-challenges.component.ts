import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-water-challenges",
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="mb-8 p-6 bg-[#FFFAEB] border-2 border-[#73CCD4] rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-[#110E2F] border-b-2 border-[#73CCD4] pb-2">
      Reptes en l'accés a l'aigua a l'Àfrica
    </h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li *ngFor="let challenge of waterChallenges" class="p-4 rounded-lg bg-white hover:bg-[#73CCD4]/10 transition-colors shadow-sm">
        <span class="text-[#E59B50] mr-2">•</span>
        <span class="text-[#110E2F]">{{challenge}}</span>
      </li>
    </ul>
  </section>
  `,
  styles: [],
})
export class WaterChallengesComponent {
  waterChallenges = [
    "Escassetat d'aigua en regions àrides i semiàrides",
    "Infraestructura deficient per a la distribució d'aigua",
    "Contaminació de fonts d'aigua per activitats industrials i agrícoles",
    "Canvi climàtic que afecta els patrons de precipitació",
    "Creixement ràpid de la població urbana",
    "Conflictes i inestabilitat política.",
    "Falta de finançament per a projectes d'aigua i sanejament",
    "Desigualtat en l'accés entre zones rurals i urbanes",
  ]
}
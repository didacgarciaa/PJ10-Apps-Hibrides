import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { WaterAccessChartComponent } from "../water-access-chart/water-acess-chart.component"
import { WaterDistributionChartComponent } from "../water-distribution-chart/water-distribution-chart.component"
import { RegionalComparisonChartComponent } from "../regional-comparison-chart/regional-comparison-chart.component"
import { WaterStatsComponent } from "../water-stats/water-stats.component"
import { WaterDataTableComponent } from "../water-data-table/watar-data-table.component"
import { WaterChallengesComponent } from "../water-challenges/water-challenges.component"
import { WaterTipsComponent } from "../water-tips/water-tips.component"
import { HeaderComponent } from "../../header/header.component"
import { FooterComponent } from "../../footer/footer.component"

@Component({
  selector: "water-use",
  standalone: true,
  imports: [
    CommonModule,
    WaterAccessChartComponent,
    WaterDistributionChartComponent,
    RegionalComparisonChartComponent,
    WaterStatsComponent,
    WaterDataTableComponent,
    WaterChallengesComponent,
    WaterTipsComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: "./water-use.component.html"
})
export class WaterComponent {
  title = "Accés a l'Aigua a l'Àfrica"
}


import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-table',
  standalone: true,  
  templateUrl: './table.component.html',
  imports: [         
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns = ['position', 'country', 'waterConsumption', 'population'];
  dataSource = new MatTableDataSource(WATER_CONSUMPTION_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface WaterConsumptionData {
  position: number;
  country: string;
  waterConsumption: string; // Litros per cápita por día
  population: string; // Millones de habitantes
}

const WATER_CONSUMPTION_DATA: WaterConsumptionData[] = [
  { position: 1, country: 'Nigeria', waterConsumption: '50 L', population: '206M' },
  { position: 2, country: 'South Africa', waterConsumption: '220 L', population: '59M' },
  { position: 3, country: 'Egypt', waterConsumption: '300 L', population: '104M' },
  { position: 4, country: 'Kenya', waterConsumption: '90 L', population: '54M' },
  { position: 5, country: 'Ghana', waterConsumption: '70 L', population: '31M' },
  { position: 6, country: 'Ethiopia', waterConsumption: '40 L', population: '115M' },
  { position: 7, country: 'Morocco', waterConsumption: '100 L', population: '37M' },
  { position: 8, country: 'Algeria', waterConsumption: '120 L', population: '43M' },
  { position: 9, country: 'Tanzania', waterConsumption: '60 L', population: '60M' },
  { position: 10, country: 'Uganda', waterConsumption: '55 L', population: '46M' },
];

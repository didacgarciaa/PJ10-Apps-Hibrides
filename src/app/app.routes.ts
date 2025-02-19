import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ContacteComponent } from './contacte/contacte.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TableComponent } from './table/table.component';
import { WaterComponent } from './potabilitat/WaterComponent/water-use.component';

export const routes: Routes = [
    {path: '', component: LandingComponent },
    {path: 'contacte', component: ContacteComponent },
    {path: 'inversio', component: InvestmentsComponent},
    {path: 'despeses', component: TableComponent},
    {path: 'potabilitat', component: WaterComponent},
    

];

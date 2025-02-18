import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home.component";
import { TimesheetComponent } from "./content-pages/timesheet/timesheet.component";
import { SalaryComponent } from "./content-pages/salary/salary.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'timesheet', component: TimesheetComponent},
  { path: 'salaries', component: SalaryComponent},
  { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

import { Routes } from '@angular/router';

import {SettingsComponent} from "./components/settings/settings.component";
export const routes: Routes = [
  {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: 'settings'},
];

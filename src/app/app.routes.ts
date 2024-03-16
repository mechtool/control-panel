import { Routes } from '@angular/router';

import {SettingsComponent} from "./components/settings/settings.component";
import {TechnicalBlocksComponent} from "./components/technical-blocks/technical-blocks.component";
import {VisualMonitoringComponent} from "./components/visual-monitoring/visual-monitoring.component";
export const routes: Routes = [
  {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
  {path: 'technical-blocks', component: TechnicalBlocksComponent, pathMatch: 'full'},
  {path: 'visual-monitoring', component: VisualMonitoringComponent, pathMatch: 'full'},
  {path: '' , pathMatch: 'full', redirectTo: 'technical-blocks'},
];

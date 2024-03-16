import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {MainServiceService} from "./services/main-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    RouterLink,
  ],
  providers: [
    MainServiceService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {MenuItem} from "primeng/api";
import {RippleModule} from "primeng/ripple";
import {SidebarModule} from "primeng/sidebar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SidebarModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidebarVisible3: boolean = false
}

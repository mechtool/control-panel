import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {MainServiceService} from "./services/main-service.service";
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    RouterLink,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule
  ],
  providers: [
    MainServiceService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() public userSymbol = 'U';
  @Input() public badgeValue = '1';
  @Input() public userAvatarStyle = { 'background-color': '#4caf4f', color: '#ffffff', cursor: 'pointer' };
  onClickAvatar(){

  }
}

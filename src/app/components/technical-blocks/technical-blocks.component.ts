import { Component } from '@angular/core';
import {technicalBlocksMeta} from "../../model/meta-models";
import {ITechnicalBlock} from "../../model/interfaces";
import {CardModule} from "primeng/card";
import {CommonModule} from "@angular/common";
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-technical-blocks',
  standalone: true,
  imports: [
    CommonModule,
    RippleModule,
    CardModule,
  ],
  templateUrl: './technical-blocks.component.html',
  styleUrl: './technical-blocks.component.css'
})
export class TechnicalBlocksComponent {

  public readonly technicalBlocksMeta:ITechnicalBlock[] = technicalBlocksMeta;
}

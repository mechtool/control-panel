import {TechnicalBlockTypes} from "./enums";
export interface ITechnicalBlock {
  type: TechnicalBlockTypes;
  header: string;
  subheader: string;
}
export interface ITechnicalBlockButton {
}

import {ITechnicalBlock} from "./interfaces";
import {TechnicalBlockTypes} from "./enums";

export const technicalBlocksMeta : ITechnicalBlock[] = [
  { header: 'Свет', subheader: 'Дальний, ближний, противотуманный, поворотники...', type: TechnicalBlockTypes.LIGHT },
  { header: 'Топливо', subheader: 'Количество, индикация, марка...', type: TechnicalBlockTypes.FUEL },
  { header: 'Двигатель', subheader: 'Марка, контроль, фильтры, масло, индикация...', type: TechnicalBlockTypes.ENGINE },
  { header: 'Гидравлика', subheader: 'Насосы, марка, давление, инструменты, индикация...', type: TechnicalBlockTypes.HYDRAULICS },
  { header: 'Электрика', subheader: 'Аккумуляторы, стартеры, проводка, предохранители...', type: TechnicalBlockTypes.ELECTRICITY },
  { header: 'Пневматика', subheader: 'Воздух, давление, компрессоры, потребители...', type: TechnicalBlockTypes.PNEUMATICS },
  { header: 'Рулевое управление', subheader: 'Усилитель руля', type: TechnicalBlockTypes.STEERING_CONTROL },
  { header: 'Тормозная система', subheader: 'Настройки тормозной системы', type: TechnicalBlockTypes.BRAKING_SYSTEM },
  { header: 'Трансмиссия', subheader: 'Коробка передач', type: TechnicalBlockTypes.TRANSMISSION },
]

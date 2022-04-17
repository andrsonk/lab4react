import { ProgramComplexity, Categories } from "./constants";
import FatWomanImage from './icons/femka.png';
import KickboxerImage from './icons/nigga.png';
import ThinWomanImage from './icons/dishwasher.png';

export const programs = [
  {
    id: 1,
    name: 'Интенсивное похудение',
    complexity: ProgramComplexity.Hard,
    duration: 45,
    categories: [
      Categories.Cardio,
      Categories.PowerTraining,
      Categories.Stretching,
    ],
    image: FatWomanImage,
    exersizes: [
      {
        id: 1,
        name: 'Жим гантелей лежа',
        repeating: { count: 10, times: 4 },
        category: Categories.PowerTraining,
      },
      {
        id: 2,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Categories.Cardio,
      },
      {
        id: 3,
        name: 'Румынская тяга с гантелями',
        repeating: { count: 10, times: 4 },
        category: Categories.PowerTraining,
      },
    ],
  },
  {
    id: 2,
    name: 'Усиленная тренировка',
    complexity: ProgramComplexity.Medium,
    duration: 45,
    categories: [
      Categories.Cardio,
      Categories.PowerTraining,
      Categories.Stretching,
    ],
    image: KickboxerImage,
    exersizes: [
      {
        id: 4,
        name: 'Жим гантелей лежа',
        repeating: { count: 10, times: 4 },
        category: Categories.PowerTraining,
      },
      {
        id: 5,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Categories.Cardio,
      },
      {
        id: 6,
        name: 'Румынская тяга с гантелями',
        repeating: { count: 10, times: 4 },
        category: Categories.PowerTraining,
      },
    ],
  },
  {
    id: 3,
    name: 'Усиленная тренировка',
    complexity: ProgramComplexity.Easy,
    duration: 35,
    categories: [
      Categories.Cardio,
      Categories.Stretching,
    ],
    image: ThinWomanImage,
    exersizes: [
      {
        id: 7,
        name: 'Растяжка',
        repeating: { count: 10, times: 4 },
        category: Categories.Stretching,
      },
      {
        id: 8,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Categories.Cardio,
      },
      {
        id: 9,
        name: 'Йога',
        repeating: { count: 10, times: 4 },
        category: Categories.Stretching,
      },
    ],
  },
];
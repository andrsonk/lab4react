import { ProgramComplexity } from './constants';

export const getCompexityLabel = (complexity) => {
  switch (complexity) {
    case ProgramComplexity.Easy:
      return 'Легкая';
    case ProgramComplexity.Medium:
      return 'Средняя';
    case ProgramComplexity.Hard:
    default:
      return 'Сложная';
  }
}

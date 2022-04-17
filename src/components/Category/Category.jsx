import React from 'react';
import { ReactComponent as CardioIcon } from '../../icons/cardio.svg';
import { ReactComponent as WeightLossIcon } from '../../icons/antistonks.svg';
import { ReactComponent as PowerTrainingIcon } from '../../icons/stonks.svg';
import { ReactComponent as StretchingIcon } from '../../icons/grow.svg';
import { Categories } from '../../constants';
import './Category.css';

const iconByCategory = (category) => {
  switch (category) {
    case Categories.WeightLoss:
      return <WeightLossIcon />;
    case Categories.PowerTraining:
      return <PowerTrainingIcon />;
    case Categories.Stretching:
      return <StretchingIcon />;
    case Categories.Cardio:
    default:
      return <CardioIcon />;
  }
};

const labelByCategory = (category) => {
  switch (category) {
    case Categories.PowerTraining:
      return 'Силовые тренировки';
    case Categories.Stretching:
      return 'Растяжка';
    case Categories.WeightLoss:
      return 'Потеря веса';
    case Categories.Cardio:
    default:
      return 'Кардио';
  }
}

const categoriesClassNames = {
  [Categories.Cardio]: 'cardio',
  [Categories.PowerTraining]: 'power-training',
  [Categories.WeightLoss]: 'weightloss',
  [Categories.Stretching]: 'stretching',
}

const Category = ({ category, withLabel }) => (
  <div className='category__container'>
    {iconByCategory(category)}

    {withLabel && (
      <p className={categoriesClassNames[category]}>
        {labelByCategory(category)}
      </p>
    )}
  </div>
);

export default Category;

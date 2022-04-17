import React from 'react';
import Category from '../Category';
import { Categories } from '../../constants';
import './Header.css';

const Header = () => (
  <header className='header'>
    <h1 className='header-heading'>
      Мои тренировки
    </h1>

    <legend className='header-legend'>
      <Category
        category={Categories.Cardio}
        withLabel
      />

      <Category
        category={Categories.PowerTraining}
        withLabel
      />

      <Category
        category={Categories.WeightLoss}
        withLabel
      />

      <Category
        category={Categories.Stretching}
        withLabel
      />
    </legend>
  </header>
)

export default Header;
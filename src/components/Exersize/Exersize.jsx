import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { Categories } from '../../constants';
import Category from '../Category';
import './Exersize.css';

const exersizeColorClass = (category) => {
  switch (category) {
    case Categories.Cardio:
    default:
      return 'cardio';
    case Categories.PowerTraining:
      return 'power-training';
    case Categories.Stretching:
      return 'stretching';
    case Categories.WeightLoss:
      return 'weightloss';
  }
}

const Exersize = ({ exersize }) => {
  const { name, repeating: { count, times}, category } = exersize;

  const [completed, setCompleted] = useState(false);

  const toggleCompleted = useCallback(() => {
    setCompleted(!completed);
  }, [completed]);

  return (
    <li className={"exercise"}>
      <div className="exercise-name">
        <Category category={category} />
        <p className={exersizeColorClass(category)}>{name}</p>
      </div>
      <div className="exercise-repeating">
        {`${count} - ${times}`}

        <button
          onClick={toggleCompleted}
          className={cn("exersize-set-complete-button", { completed })}
        >
          ✓
        </button>
      </div>
    </li>
  );
};

export default Exersize;

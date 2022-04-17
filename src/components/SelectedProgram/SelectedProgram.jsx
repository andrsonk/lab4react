import React from 'react';
import { getCompexityLabel } from '../../helpers';
import ClockIcon from '../../icons/clock.svg';
import Exersize from '../Exersize';
import './SelectedProgram.css';

const SelectedProgram = ({ program, closeSelected }) => {
  const { name, complexity, duration, exersizes } = program;

  return (
    <div className="selected-program-container">
      <header className="selected-program-header">
        <div>
          <h2>
            {name}
          </h2>

          <p>
            {`Сложность тренировки: ${getCompexityLabel(complexity)}`}
          </p>
        </div>

        <div className="program-time">
          <img src={ClockIcon} alt='clock' />
          {`${duration} минут`}
        </div>
      </header>

      <ul className="exercises-list">
        {exersizes.map((exersize) => (
          <Exersize key={exersize.id} exersize={exersize} />
        ))}
      </ul>

      <button
        className="selected-program-button"
        onClick={closeSelected}
      >
        ✔ Выполнено
      </button>
    </div>
  );
};

export default SelectedProgram;

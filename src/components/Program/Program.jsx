import React, { useCallback } from 'react';
import { getCompexityLabel } from '../../helpers';
import Arrow from '../../icons/arrow-bottom.svg';
import Clock from '../../icons/clock.svg';
import Category from '../Category';
import './Program.css';

const Program = ({ program, setSelected, isSelected }) => {
  const {
    name, complexity, duration,
    categories, image,
  } = program;

  const setSelectedCallback = useCallback(() => {
    setSelected(program);
  }, [program, setSelected]);

  return (
    <li className='program'>
      <img
        className='program-image'
        src={image}
        alt='Program background'
      />

      <div className='program-info'>
        <h2>
          {name}
        </h2>
        <p>
          {`Сложность тренировки: ${getCompexityLabel(complexity)}`}
        </p>

        <div className="program-details">
            <div className="program-time">
              <img src={Clock} alt="clock icon" />
              {`${duration} минут`}
            </div>

            <div className="program-markers">
              {categories.map((category) => (
                <Category category={category} key={category} />
              ))}
            </div>
        </div>

        <button
          className={`program-button ${isSelected && 'selected'}`}
          onClick={setSelectedCallback}
        >
          <img src={Arrow} alt="Select program button" />
        </button>
      </div>
    </li>
  );
}

export default Program;

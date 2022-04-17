import React from 'react';
import Program from '../Program/Program';
import './ProgramsList.css';

const ProgramsList = ({ programs, setSelected, selectedProgram }) => (
  <ul className='programs-list'>
    {programs.map((program) => (
      <Program
        program={program}
        key={program.id}
        setSelected={setSelected}
        isSelected={program === selectedProgram}
      />
    ))}
  </ul>
)

export default ProgramsList;

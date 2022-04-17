import React, { useCallback, useState } from 'react';
import SelectedProgram from '../SelectedProgram';
import ProgramsList from '../ProgramsList';
import { programs } from '../../programs';
import './AppContainer.css';

const AppContainer = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const closeSelected = useCallback(() => {
    setSelectedProgram(null);
  }, [])

  return (
    <div className='app-container'>
      <ProgramsList
        programs={programs}
        selectedProgram={selectedProgram}
        setSelected={setSelectedProgram}
      />

      {selectedProgram && (
        <SelectedProgram
          program={selectedProgram}
          closeSelected={closeSelected}
        />
      )}
    </div>
  )
};

export default AppContainer;
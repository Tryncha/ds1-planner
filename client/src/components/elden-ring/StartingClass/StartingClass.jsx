import { useContext, useId } from 'react';
import { capitalizeWord } from '../../../utils/index.js';
import ERBuildContext from '../../../context/ERBuildContext.jsx';
import { STARTING_CLASSES } from '../../../constants/eldenRing.js';

const StartingClass = () => {
  const id = useId();
  const { build, buildDispatch } = useContext(ERBuildContext);

  function handleChange(event) {
    const newStartingClass = event.target.value;
    buildDispatch({ type: 'SET_STARTING_CLASS', payload: newStartingClass });
  }

  return (
    <div className="StartingClass">
      <label className="StartingClass-label" htmlFor={id}>
        Starting Class
      </label>
      <select className="StartingClass-select" id={id} value={build.character.startingClass} onChange={handleChange}>
        {STARTING_CLASSES.map((cls) => (
          <option key={cls} value={cls}>
            {capitalizeWord(cls)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StartingClass;

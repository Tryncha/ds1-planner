import { useContext, useId } from 'react';
import { capitalizeWord } from '../utils';
import CharacterContext from '../context/CharacterContext';
import { STARTING_CLASSES } from '../constants';

const StartingClass = () => {
  const id = useId();
  const { character, characterDispatch } = useContext(CharacterContext);

  function handleChange(event) {
    const newStartingClass = event.target.value;
    characterDispatch({ type: 'SET_STARTING_CLASS', payload: newStartingClass });
  }

  return (
    <div className="StartingClass">
      <label className="StartingClass-label" htmlFor={id}>
        Starting Class
      </label>
      <select className="StartingClass-select" id={id} value={character.startingClass} onChange={handleChange}>
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

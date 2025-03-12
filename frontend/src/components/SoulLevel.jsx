import { useContext, useId } from 'react';
import CharacterContext from '../context/CharacterContext';
import { calculateSoulLevel } from '../utils';

const SoulLevel = () => {
  const id = useId();
  const { character } = useContext(CharacterContext);

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Soul Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateSoulLevel(character)}
      </output>
    </div>
  );
};

export default SoulLevel;

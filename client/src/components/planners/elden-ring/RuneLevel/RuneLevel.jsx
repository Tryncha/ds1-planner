import { useId } from 'react';
import { calculateRuneLevel } from '../../../../utils/index.js';

const RuneLevel = ({ runeLevelBase, basePoints, attributes }) => {
  const id = useId();

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Rune Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateRuneLevel(runeLevelBase, basePoints, attributes)}
      </output>
    </div>
  );
};

export default RuneLevel;

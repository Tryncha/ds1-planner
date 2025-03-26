import { useId } from 'react';
import { calculateSoulLevel } from '../../../../utils/index.js';

const SoulLevel = ({ soulLevelBase, basePoints, attributes }) => {
  const id = useId();

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Soul Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateSoulLevel(soulLevelBase, basePoints, attributes)}
      </output>
    </div>
  );
};

export default SoulLevel;

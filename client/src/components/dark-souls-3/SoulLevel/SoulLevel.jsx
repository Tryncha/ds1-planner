import { useContext, useId } from 'react';
import DS3BuildContext from '../../../context/DS3BuildContext.jsx';
import { calculateSoulLevel } from '../../../utils/darkSouls3.js';

const SoulLevel = () => {
  const id = useId();
  const { build } = useContext(DS3BuildContext);

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Soul Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateSoulLevel(build.character)}
      </output>
    </div>
  );
};

export default SoulLevel;

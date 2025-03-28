import { useContext, useId } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext.jsx';
import { calculateSoulLevel } from '../../../utils/darkSouls1.js';

const SoulLevel = () => {
  const id = useId();
  const { build } = useContext(DS1BuildContext);

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

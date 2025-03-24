import { useContext, useId } from 'react';
import DS2BuildContext from '../../../context/DS2BuildContext.jsx';
import { calculateSoulLevel } from '../../../utils/darkSouls2.js';

const SoulLevel = () => {
  const id = useId();
  const { build } = useContext(DS2BuildContext);

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

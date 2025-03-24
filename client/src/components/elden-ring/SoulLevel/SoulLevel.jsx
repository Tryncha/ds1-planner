import { useContext, useId } from 'react';
import ERBuildContext from '../../../context/ERBuildContext.jsx';
import { calculateRuneLevel } from '../../../utils/eldenRing.js';

const SoulLevel = () => {
  const id = useId();
  const { build } = useContext(ERBuildContext);

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Soul Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateRuneLevel(build.character)}
      </output>
    </div>
  );
};

export default SoulLevel;

import { useContext, useId } from 'react';
import BuildContext from '../../context/BuildDS2Context';
import { calculateSoulLevel } from '../../utils';

const SoulLevel = () => {
  const id = useId();
  const { build } = useContext(BuildContext);

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

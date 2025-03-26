import { useId } from 'react';
import { capitalizeWord } from '../../../../utils/index.js';

const StartingClass = ({ value, onChange, options }) => {
  const id = useId();

  return (
    <div className="StartingClass">
      <label htmlFor={id} className="StartingClass-label">
        Starting Class
      </label>
      <select id={id} className="StartingClass-select" value={value} onChange={onChange}>
        {options.map((cls) => (
          <option key={cls} value={cls}>
            {capitalizeWord(cls)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StartingClass;

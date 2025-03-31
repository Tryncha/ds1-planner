import { useId } from 'react';
import { capitalizeWord } from '../../../../utils';

const PlannerSelect = ({ label, value, onChange, options }) => {
  const id = useId();

  return (
    <div className="LabelInput">
      <label htmlFor={id} className="LabelInput-label">
        {label}
      </label>
      <select id={id} className="LabelInput-select" value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {capitalizeWord(opt)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlannerSelect;

import { useId } from 'react';
import { capitalizeText } from '../../../../utils';

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
            {capitalizeText(opt)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlannerSelect;

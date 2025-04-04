import { useId } from 'react';
import { capitalizeText } from '../../../../utils';

const Gender = ({ value, onChange, options }) => {
  const id = useId();

  return (
    <div className="LabelInput">
      <label htmlFor={id} className="LabelInput-label">
        Gender
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

export default Gender;

// TO DO:
// - Cambiar a dos botones, uno con símbolo masculino y otro con símbolo femenino
// - Considerar la opción de usar Tipo A y Tipo B, en lugar de Male y Female

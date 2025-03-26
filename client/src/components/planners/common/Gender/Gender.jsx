import { useId } from 'react';
import { capitalizeWord } from '../../../../utils';

const Gender = ({ value, onChange, options }) => {
  const id = useId();

  return (
    <div className="Gender">
      <label htmlFor={id} className="Gender-label">
        Gender
      </label>
      <select id={id} className="Gender-select" value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {capitalizeWord(opt)}
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

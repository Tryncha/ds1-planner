import { useContext, useId } from 'react';
import BuildContext from '../../context/BuildContext';

const Gender = () => {
  const id = useId();
  const { build, buildDispatch } = useContext(BuildContext);

  function handleChange(event) {
    const newGender = event.target.value;
    buildDispatch({ type: 'SET_GENDER', payload: newGender });
  }

  return (
    <div className="Gender">
      <label className="Gender-label" htmlFor={id}>
        Gender
      </label>
      <select className="Gender-select" id={id} value={build.character.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default Gender;

// TO DO:
// - Cambiar a dos botones, uno con símbolo masculino y otro con símbolo femenino
// - Considerar la opción de usar Tipo A y Tipo B, en lugar de Male y Female

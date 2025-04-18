import { useContext, useEffect, useId, useState } from 'react';
import DS1BuildContext from '../../../../context/DS1BuildContext';
import './Humanity.css';

const Humanity = ({ iconSrc }) => {
  const id = useId();
  const { build, buildDispatch } = useContext(DS1BuildContext);

  const humanity = build.character.humanity;
  const minValue = 0;
  const maxValue = 99;

  const [inputValue, setInputValue] = useState(0);
  useEffect(() => setInputValue(String(humanity)), [humanity]);

  function updateValue(newValue) {
    buildDispatch({ type: 'SET_HUMANITY', payload: newValue });
  }

  function validateAndSetValue(inputValue) {
    let numValue = parseInt(inputValue, 10);

    if (isNaN(numValue)) numValue = minValue;
    if (numValue < minValue) numValue = minValue;
    if (numValue > maxValue) numValue = maxValue;

    updateValue(numValue);
    setInputValue(String(numValue));
  }

  function decreaseValue(event) {
    event.preventDefault();
    if (humanity <= minValue) return;
    updateValue(humanity - 1);
  }

  function increaseValue(event) {
    event.preventDefault();
    if (humanity >= maxValue) return;
    updateValue(humanity + 1);
  }

  function handleChange(event) {
    const newValue = event.target.value.replace(/[eE]/g, '');
    setInputValue(String(newValue));
  }

  function handleBlur() {
    validateAndSetValue(inputValue);
  }

  function handleKeyDown(event) {
    if (event.key === 'e' || event.key === 'E') event.preventDefault();
    if (event.key === 'Enter') {
      validateAndSetValue(inputValue);
      event.target.blur();
    }
  }

  return (
    <div className="Humanity">
      <img className="u-plannerIcon" src={iconSrc} />
      <label htmlFor={id} className="Humanity-label">
        Humanity
      </label>
      <input
        id={id}
        className="Humanity-input"
        type="number"
        min={minValue}
        max={maxValue}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.target.select()}
      />
      <div className="u-innerContainer">
        <button className="Humanity-button" onClick={decreaseValue} disabled={humanity <= minValue}>
          -
        </button>
        <button className="Humanity-button" onClick={increaseValue} disabled={humanity >= maxValue}>
          +
        </button>
      </div>
    </div>
  );
};

export default Humanity;

import { useEffect, useId, useState } from 'react';
import { capitalizeWord } from '../../../../utils';
import './AttributeIO.css';

const AttributeIO = ({ icon, attribute, value, baseValue, setAttribute }) => {
  const id = useId();

  const minValue = baseValue;
  const maxValue = 99;

  const [inputValue, setInputValue] = useState(String(value));
  useEffect(() => setInputValue(String(value)), [value]);

  function validateAndSetValue(inputValue) {
    let numValue = parseInt(inputValue, 10);

    if (isNaN(numValue)) numValue = minValue;
    if (numValue < minValue) numValue = minValue;
    if (numValue > maxValue) numValue = maxValue;

    setAttribute(attribute, numValue);
    setInputValue(String(numValue));
  }

  function decreaseValue(event) {
    event.preventDefault();
    if (value <= minValue) return;
    setAttribute(attribute, value - 1);
  }

  function increaseValue(event) {
    event.preventDefault();
    if (value >= maxValue) return;
    setAttribute(attribute, value + 1);
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
    <div className="AttributeIO">
      <img className="u-plannerIcon" src={icon} />
      <label htmlFor={id} className="AttributeIO-label">
        {capitalizeWord(attribute)}
      </label>
      <output className="AttributeIO-output">{minValue}</output>
      <input
        id={id}
        className="AttributeIO-input"
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
        <button className="AttributeIO-button" onClick={decreaseValue} disabled={value <= minValue}>
          -
        </button>
        <button className="AttributeIO-button" onClick={increaseValue} disabled={value >= maxValue}>
          +
        </button>
      </div>
    </div>
  );
};

export default AttributeIO;

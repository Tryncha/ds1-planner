import { useContext, useEffect, useId, useState } from 'react';
import { capitalizeWord } from '../utils';
import CharacterContext from '../context/CharacterContext';

const AttributeIO = ({ attribute }) => {
  const id = useId();
  const { character, characterDispatch } = useContext(CharacterContext);

  const value = character.attributes.current[attribute];
  const minValue = character.attributes.base[attribute];
  const maxValue = 99;

  const [inputValue, setInputValue] = useState(String(value));
  useEffect(() => setInputValue(String(value)), [value]);

  function updateValue(newValue) {
    characterDispatch({ type: 'SET_ATTRIBUTE', payload: { attribute, value: newValue } });
  }

  function validateAndSetValue(inputValue) {
    let numValue = parseInt(inputValue, 10);

    if (isNaN(numValue)) numValue = minValue;
    if (numValue < minValue) numValue = minValue;
    if (numValue > maxValue) numValue = maxValue;

    updateValue(numValue);
    setInputValue(String(numValue));
  }

  function decreaseValue() {
    if (value <= minValue) return;
    updateValue(value - 1);
  }

  function increaseValue() {
    if (value >= maxValue) return;
    updateValue(value + 1);
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

import { useId } from 'react';
import './CharacterName.css';

const CharacterName = ({ value, onChange, maxLength, placeholder }) => {
  const id = useId();

  return (
    <div className="LabelInput">
      <label htmlFor={id} className="LabelInput-label">
        Character Name
      </label>
      <input
        id={id}
        className="LabelInput-input"
        type="text"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

export default CharacterName;

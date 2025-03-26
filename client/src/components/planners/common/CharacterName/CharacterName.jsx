import { useId } from 'react';
import './CharacterName.css';

const CharacterName = ({ value, onChange, maxLength, placeholder }) => {
  const id = useId();

  return (
    <div className="CharacterName">
      <label htmlFor={id} className="CharacterName-label">
        Character Name
      </label>
      <input
        id={id}
        className="CharacterName-input"
        type="text"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CharacterName;

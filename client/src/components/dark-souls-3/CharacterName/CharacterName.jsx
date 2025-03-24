import { useContext, useId } from 'react';
import DS3BuildContext from '../../../context/DS3BuildContext';
import './CharacterName.css';

const CharacterName = () => {
  const id = useId();
  const { build, buildDispatch } = useContext(DS3BuildContext);

  function handleChange(event) {
    buildDispatch({ type: 'SET_NAME', payload: event.target.value });
  }

  return (
    <div className="CharacterName">
      <label htmlFor={id} className="CharacterName-label">
        Character Name
      </label>
      <input
        id={id}
        className="CharacterName-input"
        type="text"
        maxLength={16} // This is the character name limit in game
        value={build.character.name}
        onChange={handleChange}
        placeholder="Ashen One"
      />
    </div>
  );
};

export default CharacterName;

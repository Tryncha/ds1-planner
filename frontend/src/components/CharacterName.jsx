import { useContext, useId } from 'react';
import CharacterContext from '../context/CharacterContext';

const CharacterName = () => {
  const id = useId();
  const { characterDispatch } = useContext(CharacterContext);

  function handleChange(event) {
    const newName = event.target.value || 'Chosen Undead';
    characterDispatch({ type: 'SET_NAME', payload: newName });
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
        onChange={handleChange}
        placeholder="Chosen Undead"
      />
    </div>
  );
};

export default CharacterName;

import { useContext, useId } from 'react';
import CharacterContext from '../context/CharacterContext';
import { ATTRIBUTES } from '../constants';

const SoulLevel = () => {
  const id = useId();
  const { character } = useContext(CharacterContext);

  function calculateSoulLevel() {
    const attributesValues = character.attributes;
    let totalAttributesValues = 0;

    ATTRIBUTES.forEach((atrr) => {
      totalAttributesValues += attributesValues[atrr];
    });

    return totalAttributesValues - character.basePoints + character.soulLevelBase;
  }

  return (
    <div className="SoulLevel">
      <label className="SoulLevel-label" htmlFor={id}>
        Soul Level
      </label>
      <output className="SoulLevel-level" id={id}>
        {calculateSoulLevel()}
      </output>
    </div>
  );
};

export default SoulLevel;

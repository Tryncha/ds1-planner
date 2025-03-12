import { createContext, useReducer } from 'react';
import startingClasses from '../../starting-classes.json';
import { ATTRIBUTES, DEFAULT_CLASS } from '../constants';

const startingClassData = startingClasses.find((cls) => cls.name === DEFAULT_CLASS);
const characterInitialState = {
  name: 'Chosen Undead',
  gender: 'male',
  startingClass: startingClassData.name,
  attributes: {
    base: { ...startingClassData.attributes.base },
    current: { ...startingClassData.attributes.base }
  },
  humanity: 0,
  soulLevel: {
    base: startingClassData.soulLevel,
    current: startingClassData.soulLevel
  },
  basePoints: startingClassData.basePoints
};

function characterReducer(characterState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...characterState, name: action.payload };

    case 'SET_GENDER':
      return { ...characterState, gender: action.payload };

    case 'SET_STARTING_CLASS': {
      const newStartingClass = action.payload;
      const newStartingClassData = startingClasses.find((cls) => cls.name === newStartingClass);

      const newAttributes = { ...characterState.attributes.current };
      const newAttributesBase = { ...newStartingClassData.attributes.base };

      ATTRIBUTES.forEach((attr) => {
        if (characterState.attributes.current[attr] <= characterState.attributes.base[attr]) {
          // If the current value is less or equal than previous base, update to new base
          // Si el valor actual es igual o menor que el base anterior, actualizamos al nuevo base
          newAttributes[attr] = newAttributesBase[attr];
        } else if (newAttributesBase[attr] > characterState.attributes.current[attr]) {
          // If the new base is greater than current, update to new base
          // Si el nuevo base es mayor que el valor actual, actualizamos al nuevo base
          newAttributes[attr] = newAttributesBase[attr];
        }
        // If it is not the case, we keep the current value (is already in newAttributes)
        // En otro caso, mantenemos el valor actual (ya está en newAttributes)
      });

      return {
        ...characterState,
        startingClass: newStartingClass,
        attributes: {
          base: newAttributesBase,
          current: newAttributes
        },
        soulLevel: {
          ...characterState.soulLevel,
          base: newStartingClassData.soulLevel
        },
        basePoints: newStartingClassData.basePoints
      };
    }

    case 'SET_ATTRIBUTE_BASE':
      return {
        ...characterState,
        attributes: {
          ...characterState.attributes,
          base: {
            ...characterState.attributes.base,
            [action.payload.attribute]: action.payload.value
          }
        }
      };

    case 'SET_ATTRIBUTE':
      return {
        ...characterState,
        attributes: {
          ...characterState.attributes,
          current: {
            ...characterState.attributes.current,
            [action.payload.attribute]: action.payload.value
          }
        }
      };

    case 'SET_HUMANITY':
      return { ...characterState, humanity: action.payload };

    default:
      return characterState;
  }
}

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  const [character, characterDispatch] = useReducer(characterReducer, characterInitialState);
  console.log(character);
  return <CharacterContext.Provider value={{ character, characterDispatch }}>{children}</CharacterContext.Provider>;
}

export default CharacterContext;

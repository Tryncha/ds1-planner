import { createContext, useReducer } from 'react';
import startingClasses from '../../starting-classes.json';
import { ATTRIBUTES } from '../constants';

const DEFAULT_CLASS = 'warrior';
const startingClassData = startingClasses.find((cls) => cls.name === DEFAULT_CLASS);

const characterInitialState = {
  name: 'Chosen Undead',
  gender: 'male',
  startingClass: startingClassData.name,
  soulLevelBase: startingClassData.soulLevel,
  basePoints: startingClassData.basePoints,
  humanity: 0,
  attributesBase: { ...startingClassData.attributesBase },
  attributes: { ...startingClassData.attributesBase }
};

function characterReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };

    case 'SET_GENDER':
      return { ...state, gender: action.payload };

    case 'SET_STARTING_CLASS': {
      const newStartingClass = action.payload;
      const newStartingClassData = startingClasses.find((cls) => cls.name === newStartingClass);

      const newAttributes = { ...state.attributes };
      const newAttributesBase = { ...newStartingClassData.attributesBase };

      ATTRIBUTES.forEach((attr) => {
        if (
          state.attributes[attr] <= state.attributesBase[attr] ||
          state.attributes[attr] === state.attributesBase[attr]
        ) {
          // Si el valor actual es igual o menor que el base anterior, actualizamos al nuevo base
          newAttributes[attr] = newAttributesBase[attr];
        } else if (newAttributesBase[attr] > state.attributes[attr]) {
          // Si el nuevo base es mayor que el valor actual, actualizamos al nuevo base
          newAttributes[attr] = newAttributesBase[attr];
        }
        // En otro caso, mantenemos el valor actual (ya está en newAttributes)
      });

      return {
        ...state,
        startingClass: newStartingClass,
        attributesBase: newAttributesBase,
        attributes: newAttributes
      };
    }

    case 'SET_ATTRIBUTE_BASE':
      return {
        ...state,
        attributesBase: {
          ...state.attributesBase,
          [action.payload.attribute]: action.payload.value
        }
      };

    case 'SET_ATTRIBUTE':
      return {
        ...state,
        attributes: {
          ...state.attributes,
          [action.payload.attribute]: action.payload.value
        }
      };

    case 'SET_HUMANITY':
      return { ...state, humanity: action.payload };

    default:
      return state;
  }
}

const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
  const [character, characterDispatch] = useReducer(characterReducer, characterInitialState);
  console.log(character);
  return <CharacterContext.Provider value={{ character, characterDispatch }}>{children}</CharacterContext.Provider>;
}

export default CharacterContext;

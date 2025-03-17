import { createContext, useReducer } from 'react';
import { ATTRIBUTES, DEFAULT_CLASS } from '../constants';
import { getStartingClassData } from '../utils';
import buildsService from '../services/builds';

function createNewCharacter() {
  return {
    name: '',
    gender: 'male',
    startingClass: startingClassData.name,
    attributes: { ...startingClassData.baseAttributes },
    humanity: 0
  };
}

const startingClassData = getStartingClassData(DEFAULT_CLASS);
const initialState = {
  title: '',
  game: 'ds2',
  description: '',
  externalUrl: '',
  videoUrl: '',
  screenshots: [],
  isPublic: false,
  tags: [],
  url: '',
  character: createNewCharacter()
};

function buildReducer(buildState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...buildState,
        character: {
          ...buildState.character,
          name: action.payload
        }
      };

    case 'SET_GENDER':
      return {
        ...buildState,
        character: {
          ...buildState.character,
          gender: action.payload
        }
      };

    case 'SET_STARTING_CLASS': {
      const newStartingClass = action.payload;
      const currentStartingClassData = getStartingClassData(buildState.character.startingClass);
      const newStartingClassData = getStartingClassData(newStartingClass);

      const currentAttributes = { ...buildState.character.attributes };
      const baseAttributes = { ...currentStartingClassData.baseAttributes };
      const newBaseAttributes = { ...newStartingClassData.baseAttributes };

      ATTRIBUTES.forEach((attr) => {
        if (currentAttributes[attr] <= baseAttributes[attr]) {
          // If the current value is less or equal than previous base, update to new base
          // Si el valor actual es igual o menor que el base anterior, actualizamos al nuevo base
          currentAttributes[attr] = newBaseAttributes[attr];
        } else if (newBaseAttributes[attr] > currentAttributes[attr]) {
          // If the new base is greater than current, update to new base
          // Si el nuevo base es mayor que el valor actual, actualizamos al nuevo base
          currentAttributes[attr] = newBaseAttributes[attr];
        }
        // If it is not the case, we keep the current value (is already in newAttributes)
        // En otro caso, mantenemos el valor actual (ya está en newAttributes)
      });

      return {
        ...buildState,
        character: {
          ...buildState.character,
          startingClass: newStartingClass,
          attributes: currentAttributes,
          // soulLevel: calculateSoulLevel(buildState.character),
          basePoints: newStartingClassData.basePoints
        }
      };
    }

    case 'SET_ATTRIBUTE':
      return {
        ...buildState,
        character: {
          ...buildState.character,
          attributes: {
            ...buildState.character.attributes,
            [action.payload.attribute]: action.payload.value
          }
          // soulLevel: calculateSoulLevel(buildState.character)
        }
      };

    case 'SET_HUMANITY':
      return {
        ...buildState,
        character: {
          ...buildState.character,
          humanity: action.payload
        }
      };

    case 'LOAD_BUILD':
      return action.payload;

    case 'LOAD_CHARACTER':
      return {
        ...buildState,
        character: action.payload
      };

    case 'SAVING_CHARACTER':
      return {
        ...buildState,
        isSaving: true
      };

    case 'SAVE_SUCCESS':
      return {
        ...buildState,
        isSaving: true
      };

    case 'SAVE_ERROR':
      return {
        ...buildState,
        isSaving: true
      };

    case 'RESET_CHARACTER':
      return {
        ...buildState,
        character: createNewCharacter(),
        isEditing: false,
        error: null
      };

    default:
      return buildState;
  }
}

const DS2BuildContext = createContext();

export function DS2BuildProvider({ children }) {
  const [build, buildDispatch] = useReducer(buildReducer, initialState);

  async function saveBuild(newBuild) {
    try {
      await buildsService.save(newBuild);
      console.log('Character saved successfully!');
    } catch (error) {
      console.error('Error saving character', error);
    }
  }

  async function updateBuild(id, updatedBuild) {
    try {
      await buildsService.update(id, updatedBuild);
      console.log('Character updated successfully!');
    } catch (error) {
      console.error('Error updating character', error);
    }
  }

  return (
    <DS2BuildContext.Provider
      value={{
        build,
        buildDispatch,
        saveBuild,
        updateBuild
      }}>
      {children}
    </DS2BuildContext.Provider>
  );
}

export default DS2BuildContext;

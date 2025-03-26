import startingClasses from '../../assets/dark-souls-2/starting-classes.json';
import { ATTRIBUTES, DEFAULT_CLASS } from '../../constants/darkSouls2';

function getStartingClassData(startingClassName) {
  return startingClasses.find((startingClass) => startingClass.name === startingClassName);
}

const startingClassData = getStartingClassData(DEFAULT_CLASS);

export const initialState = {
  title: '',
  description: '',
  isPublic: false,
  tags: [],
  character: {
    name: '',
    gender: 'male',
    startingClass: startingClassData.name,
    attributes: { ...startingClassData.baseAttributes },
    humanity: 0
  }
};

export function buildReducer(buildState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...buildState,
        title: action.payload
      };

    case 'SET_DESCRIPTION':
      return {
        ...buildState,
        description: action.payload
      };

    case 'TOGGLE_VISIBILITY':
      return {
        ...buildState,
        isPublic: !buildState.isPublic
      };

    case 'SET_TAG':
      return {
        ...buildState,
        tags: buildState.tags.concat(action.payload)
      };

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

    case 'RESET_BUILD':
      return initialState;

    default:
      return buildState;
  }
}

import { createContext, useReducer } from 'react';
import { ATTRIBUTES, DEFAULT_CLASS } from '../constants/eldenRing.js';
import { getStartingClassData } from '../utils/eldenRing.js';
import buildService from '../services/builds.js';

function createNewBuild(startingClassData) {
  return {
    title: '',
    description: '',
    isPublic: false,
    tags: [],
    character: {
      name: '',
      gender: 'male',
      startingClass: startingClassData.name,
      attributes: { ...startingClassData.baseAttributes }
    }
  };
}

const startingClassData = getStartingClassData(DEFAULT_CLASS);
const initialState = createNewBuild(startingClassData);

function buildReducer(buildState, action) {
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
          currentAttributes[attr] = newBaseAttributes[attr];
        } else if (newBaseAttributes[attr] > currentAttributes[attr]) {
          currentAttributes[attr] = newBaseAttributes[attr];
        }
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

    case 'LOAD_BUILD':
      return action.payload;

    case 'RESET_BUILD':
      return initialState;

    default:
      return buildState;
  }
}

const ERBuildContext = createContext();

export function ERBuildProvider({ children }) {
  const [build, buildDispatch] = useReducer(buildReducer, initialState);

  async function saveBuild(newBuild) {
    try {
      await buildService.saveGameBuild('elden-ring', newBuild);
      console.log('Character saved successfully!');
    } catch (error) {
      console.error('Error saving character', error);
    }
  }

  async function updateBuild(id, updatedBuild) {
    try {
      await buildService.updateGameBuild('elden-ring', id, updatedBuild);
      console.log('Character updated successfully!');
    } catch (error) {
      console.error('Error updating character', error);
    }
  }

  console.log(build);

  return (
    <ERBuildContext.Provider
      value={{
        build,
        buildDispatch,
        saveBuild,
        updateBuild
      }}>
      {children}
    </ERBuildContext.Provider>
  );
}

export default ERBuildContext;

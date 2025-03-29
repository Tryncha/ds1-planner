import { createContext, useCallback, useEffect, useReducer, useState } from 'react';
import { buildReducer, initialState } from './reducers/darkSouls1Reducer';
import buildService from '../services/builds.js';
import startingClasses from '../assets/dark-souls-1/starting-classes.json';
import { getStartingClassData } from '../utils/index.js';

const DS1BuildContext = createContext();

export const DS1BuildProvider = ({ children }) => {
  const [build, buildDispatch] = useReducer(buildReducer, initialState);
  const [startingClassData, setStartingClassData] = useState(startingClasses[0]);

  useEffect(() => {
    const newStartingClassData = getStartingClassData(startingClasses, build.character.startingClass);
    setStartingClassData(newStartingClassData);
  }, [build.character.startingClass]);

  function setTitle(event) {
    buildDispatch({ type: 'SET_TITLE', payload: event.target.value });
  }

  function setCharacterName(event) {
    buildDispatch({ type: 'SET_NAME', payload: event.target.value });
  }

  function setGender(event) {
    buildDispatch({ type: 'SET_GENDER', payload: event.target.value });
  }

  function setStartingClass(event) {
    buildDispatch({ type: 'SET_STARTING_CLASS', payload: event.target.value });
  }

  function setAttribute(attribute, newValue) {
    buildDispatch({ type: 'SET_ATTRIBUTE', payload: { attribute, value: newValue } });
  }

  async function saveBuild(newBuild) {
    try {
      await buildService.saveGameBuild('dark-souls-1', newBuild);
      console.log('Character saved successfully!');
    } catch (error) {
      console.error('Error saving character', error);
    }
  }

  async function updateBuild(id, updatedBuild) {
    try {
      await buildService.updateGameBuild('dark-souls-1', id, updatedBuild);
      console.log('Character updated successfully!');
    } catch (error) {
      console.error('Error updating character', error);
    }
  }

  const loadBuild = useCallback(async (id) => {
    try {
      const loadedBuild = await buildService.getBuildById('dark-souls-1', id);

      const buildData = {
        title: loadedBuild.title,
        description: loadedBuild.description,
        isPublic: loadedBuild.isPublic,
        tags: loadedBuild.tags,
        character: loadedBuild.character
      };

      buildDispatch({ type: 'LOAD_BUILD', payload: buildData });

      return loadedBuild;
    } catch (error) {
      console.log('There was an error loading the build:', error);
    }
  }, []);

  const resetBuild = useCallback(() => {
    buildDispatch({ type: 'RESET_BUILD' });
  }, []);

  console.log(build);

  return (
    <DS1BuildContext.Provider
      value={{
        build,
        startingClassData,
        buildDispatch,
        setTitle,
        setCharacterName,
        setGender,
        setStartingClass,
        setAttribute,
        saveBuild,
        updateBuild,
        loadBuild,
        resetBuild
      }}>
      {children}
    </DS1BuildContext.Provider>
  );
};

export default DS1BuildContext;

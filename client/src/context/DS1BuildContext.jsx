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

  function setDescription(event) {
    buildDispatch({ type: 'SET_DESCRIPTION', payload: event.target.value });
  }

  function toggleTag(tag) {
    buildDispatch({ type: 'TOGGLE_TAG', payload: tag });
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

  function setCovenant(event) {
    buildDispatch({ type: 'SET_COVENANT', payload: event.target.value });
  }

  function createSetWeapon(slot) {
    return (weapon) => {
      buildDispatch({ type: 'SET_WEAPON', payload: { slot, weapon } });
    };
  }

  function createSetWeaponUpgrade(slot) {
    return (upgrade) => {
      buildDispatch({ type: 'SET_WEAPON_UPGRADE', payload: { slot, upgrade } });
    };
  }

  function createSetWeaponUpgradeLevel(slot) {
    return (upgradeLevel) => {
      buildDispatch({ type: 'SET_WEAPON_UPGRADE_LEVEL', payload: { slot, upgradeLevel } });
    };
  }

  function createSetArmor(slot) {
    return (armor) => {
      buildDispatch({ type: 'SET_ARMOR', payload: { slot, armor } });
    };
  }

  function createSetRing(slot) {
    return (ring) => {
      buildDispatch({ type: 'SET_RING', payload: { slot, ring } });
    };
  }

  function createSetSpell(slot) {
    return (spell) => {
      buildDispatch({ type: 'SET_SPELL', payload: { slot, spell } });
    };
  }

  function setAttunementSlots(slots) {
    buildDispatch({ type: 'SET_ATTUNEMENT_SLOTS', payload: slots });
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

  console.log('build: ', build);

  return (
    <DS1BuildContext.Provider
      value={{
        build,
        startingClassData,
        buildDispatch,
        setTitle,
        setCharacterName,
        setDescription,
        toggleTag,
        setGender,
        setStartingClass,
        setAttribute,
        setCovenant,
        createSetWeapon,
        createSetWeaponUpgrade,
        createSetWeaponUpgradeLevel,
        createSetArmor,
        createSetRing,
        createSetSpell,
        setAttunementSlots,
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

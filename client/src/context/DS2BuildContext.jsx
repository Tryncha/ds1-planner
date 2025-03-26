import { createContext, useReducer } from 'react';
import { buildReducer, initialState } from './reducers/darkSouls2Reducer';

const DS2BuildContext = createContext();

export const DS2BuildProvider = ({ children }) => {
  const [build, buildDispatch] = useReducer(buildReducer, initialState);

  function setTitle(event) {
    buildDispatch({ type: 'SET_TITLE', payload: event.target.value });
  }

  function setCharacterName(event) {
    buildDispatch({ type: 'SET_NAME', payload: event.target.value });
  }

  function setGender(event) {
    const newGender = event.target.value;
    buildDispatch({ type: 'SET_GENDER', payload: newGender });
  }

  function setStartingClass(event) {
    const newStartingClass = event.target.value;
    buildDispatch({ type: 'SET_STARTING_CLASS', payload: newStartingClass });
  }

  function setAttribute(attribute, newValue) {
    buildDispatch({ type: 'SET_ATTRIBUTE', payload: { attribute, value: newValue } });
  }

  console.log(build);

  return (
    <DS2BuildContext.Provider
      value={{
        build,
        buildDispatch,
        setTitle,
        setCharacterName,
        setGender,
        setStartingClass,
        setAttribute
      }}>
      {children}
    </DS2BuildContext.Provider>
  );
};

export default DS2BuildContext;

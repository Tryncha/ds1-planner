import { createContext, useReducer } from 'react';
import { buildReducer, initialState } from './reducers/darkSouls1Reducer';

const DS1BuildContext = createContext();

export const DS1BuildProvider = ({ children }) => {
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
    <DS1BuildContext.Provider
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
    </DS1BuildContext.Provider>
  );
};

export default DS1BuildContext;

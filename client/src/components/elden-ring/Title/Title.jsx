import { useContext, useId } from 'react';
import ERBuildContext from '../../../context/ERBuildContext';
import './Title.css';

const Title = () => {
  const inputId = useId();
  const { build, buildDispatch } = useContext(ERBuildContext);

  function handleChange(event) {
    buildDispatch({ type: 'SET_TITLE', payload: event.target.value });
  }

  return (
    <div className="Title">
      <input
        id={inputId}
        className="Title-input"
        type="text"
        value={build.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
    </div>
  );
};

export default Title;

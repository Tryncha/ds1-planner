import { useContext, useId } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';
import './Title.css';

const Title = () => {
  const inputId = useId();
  const { build, buildDispatch } = useContext(DS1BuildContext);

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

import { useContext, useId } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';

const Title = () => {
  const id = useId();
  const { build, buildDispatch } = useContext(DS1BuildContext);

  function handleChange(event) {
    buildDispatch({ type: 'SET_TITLE', payload: event.target.value });
  }

  return (
    <div>
      <label htmlFor={id}>Title</label>
      <input id={id} type="text" value={build.title} onChange={handleChange} placeholder="Title" required />
    </div>
  );
};

export default Title;

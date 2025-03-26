import { useId } from 'react';
import './Title.css';

const Title = ({ value, onChange }) => {
  const inputId = useId();

  return (
    <div className="Title">
      <input
        id={inputId}
        className="Title-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Title"
        required
      />
    </div>
  );
};

export default Title;

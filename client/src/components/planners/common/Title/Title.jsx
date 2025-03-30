import { useEffect, useId, useState } from 'react';
import './Title.css';

const Title = ({ value, onChange, titlePlaceholders }) => {
  const inputId = useId();
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    function getRandomPlaceholder() {
      const randomIndex = Math.floor(Math.random() * titlePlaceholders.length);
      return titlePlaceholders[randomIndex];
    }

    setPlaceholder(getRandomPlaceholder());
  }, [value, titlePlaceholders]);

  return (
    <input
      id={inputId}
      className="Title"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={`${placeholder}...`}
      autoComplete="off"
      required
    />
  );
};

export default Title;

import { useId } from 'react';
import './Description.css';

const Description = ({ value, onChange }) => {
  const id = useId();

  return (
    <>
      <textarea
        id={id}
        name="description"
        className="Description"
        value={value}
        onChange={onChange}
        maxLength={500}
        placeholder={`(OPTIONAL)\nDescribe your character here\n\n- Target level: 280\n- Only greatswords\n- Target boss : Manus\n\nYou can also write your own lore...\nMax characters: 500`}
        spellCheck="false"
      />
      <span>
        <strong>Characters:</strong> {value.length}/500
      </span>
    </>
  );
};

export default Description;

import { calculateSoulLevel, capitalizeWord } from '../../../utils';
import { Link } from 'react-router-dom';
import './BuildCard.css';

const BuildCard = ({ build }) => {
  return (
    <div className="BuildCard">
      <strong className="BuildCard-title">{build.character.name}</strong>
      <span>Class: {capitalizeWord(build.character.startingClass)}</span>
      <span>Soul Level: {calculateSoulLevel(build.character)}</span>
      <Link to={`/planner/${build.id}`}>
        <button>Edit this character</button>
      </Link>
    </div>
  );
};

export default BuildCard;

import { calculateSoulLevel, capitalizeWord } from '../../../utils';
import { Link } from 'react-router-dom';
import './BuildCard.css';
import { ATTRIBUTES, GAME_PARAMS } from '../../../constants';
import ExpirationTime from '../../ExpirationTime/ExpirationTime';

const BuildCard = ({ build }) => {
  console.log(build);

  return (
    <div className="BuildCard">
      <strong>{build.title}</strong>
      <ExpirationTime expirationDate={build.expiresAt} />
      <strong>{build.character.name}</strong>
      <span>Class: {capitalizeWord(build.character.startingClass)}</span>
      {ATTRIBUTES.map((attr) => (
        <span key={`${attr}-${build.id}`}>{`${capitalizeWord(attr)}: ${build.character.attributes[attr]}`}</span>
      ))}
      <span>Soul Level: {calculateSoulLevel(build.character)}</span>
      <Link to={`/planner/${GAME_PARAMS[build.game]}/${build.id}`}>
        <button>Edit this character</button>
      </Link>
    </div>
  );
};

export default BuildCard;

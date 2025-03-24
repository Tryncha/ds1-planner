import { capitalizeWord } from '../../../utils/index.js';
import { calculateSoulLevel } from '../../../utils/eldenRing.js';
import { useNavigate } from 'react-router-dom';
import './BuildCard.css';
import { GAME_PARAMS } from '../../../constants';
import { ATTRIBUTES } from '../../../constants/eldenRing.js';
import ExpirationTime from '../../ExpirationTime/ExpirationTime';
import buildService from '../../../services/builds';

const BuildCard = ({ build }) => {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/planner/${GAME_PARAMS[build.game]}/${build.id}`);
  }

  function handleDelete() {
    if (build.game === 'DS1') {
      if (window.confirm('Are you sure you want to delete this build?')) {
        buildService.deleteGameBuild('dark-souls-1', build.id);
        window.location.reload();
      }
    }
  }

  return (
    <div className="BuildCard">
      <strong>{build.title}</strong>
      {build.expiresAt && <ExpirationTime expirationDate={build.expiresAt} />}
      <strong>{build.character.name}</strong>
      <span>Class: {capitalizeWord(build.character.startingClass)}</span>
      {ATTRIBUTES.map((attr) => (
        <span key={`${attr}-${build.id}`}>{`${capitalizeWord(attr)}: ${build.character.attributes[attr]}`}</span>
      ))}
      <span>Soul Level: {calculateSoulLevel(build.character)}</span>
      <button onClick={handleEdit}>Edit this character</button>
      <button onClick={handleDelete}>Delete this character</button>
    </div>
  );
};

export default BuildCard;

import { useState, useEffect } from 'react';
import buildsService from '../services/builds';
import { calculateSoulLevel, capitalizeWord } from '../utils';
import { Link } from 'react-router-dom';

const BuildDetails = ({ build }) => {
  return (
    <div className="u-container">
      <span>Name: {build.character.name}</span>
      <span>Class: {capitalizeWord(build.character.startingClass)}</span>
      <span>Soul Level: {calculateSoulLevel(build.character)}</span>
      <Link to={`/planner/${build.id}`}>
        <button>Edit this character</button>
      </Link>
    </div>
  );
};

const Profile = () => {
  const [userBuilds, setUserBuilds] = useState([]);

  useEffect(() => {
    buildsService.getUserBuilds().then((builds) => {
      setUserBuilds(builds);
    });
  }, []);

  return (
    <div>
      {userBuilds.map((build) => (
        <BuildDetails key={build.id} build={build} />
      ))}
    </div>
  );
};

export default Profile;

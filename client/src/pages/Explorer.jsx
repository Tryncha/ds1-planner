import { useEffect, useState } from 'react';
import { calculateSoulLevel, capitalizeWord } from '../utils';
import { Link } from 'react-router-dom';
import buildsService from '../services/builds';

const GAME_PARAMS = {
  ds1: 'dark-souls-1',
  ds2: 'dark-souls-2',
  ds3: 'dark-souls-3'
};

const BuildDetails = ({ build }) => {
  return (
    <div className="u-container">
      <strong>{build.title}</strong>
      <span>Name: {build.character.name}</span>
      <span>Class: {capitalizeWord(build.character.startingClass)}</span>
      <span>Soul Level: {calculateSoulLevel(build.character)}</span>
      <span>Expires at: {build.expiresAt}</span>
      <Link to={`/planner/${GAME_PARAMS[build.game]}/${build.id}`}>Edit this character</Link>
    </div>
  );
};

const Explorer = () => {
  const [communityBuilds, setCommunityBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchBuilds() {
      const loadedBuilds = await buildsService.getAll();
      setCommunityBuilds(loadedBuilds);
      setIsLoading(false);
    }

    fetchBuilds();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {communityBuilds.map((build) => (
        <BuildDetails key={build.id} build={build} />
      ))}
    </div>
  );
};

export default Explorer;

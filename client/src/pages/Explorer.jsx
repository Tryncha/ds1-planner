import { useEffect, useState } from 'react';
import { calculateSoulLevel, capitalizeWord } from '../utils';
import { Link } from 'react-router-dom';
import buildsService from '../services/builds';

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

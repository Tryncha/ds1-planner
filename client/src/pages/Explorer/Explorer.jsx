import { useEffect, useState } from 'react';
import buildsService from '../../services/builds';
import BuildCard from '../../components/dark-souls-1/BuildCard/BuildCard';
import './Explorer.css';

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
    <div className="u-mainPage">
      {communityBuilds.map((build) => (
        <BuildCard key={build.id} build={build} />
      ))}
    </div>
  );
};

export default Explorer;

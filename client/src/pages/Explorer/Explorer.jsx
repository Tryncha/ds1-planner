import { useEffect, useState } from 'react';
import buildsService from '../../services/builds';
import BuildsTable from '../../components/BuildsTable/BuildsTable';
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

  if (isLoading)
    return (
      <main className="u-mainPage">
        <h2>Community Builds</h2>
        <hr className="u-hr" />
        <div>Loading...</div>
      </main>
    );

  return (
    <main className="u-mainPage">
      <h2>Community Builds</h2>
      <hr className="u-hr" />
      <BuildsTable builds={communityBuilds} />
    </main>
  );
};

export default Explorer;

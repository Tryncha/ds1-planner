import { useState, useEffect } from 'react';
import buildsService from '../../services/builds';
import './Profile.css';
import BuildsTable from '../../components/BuildsTable/BuildsTable';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userBuilds, setUserBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchBuilds() {
      const builds = await buildsService.getUserBuilds();
      setUserBuilds(builds);
      setIsLoading(false);
    }

    fetchBuilds();
  }, []);

  if (isLoading)
    return (
      <main className="u-mainPage">
        <div style={{ width: '100%' }}>
          <Link to={'/'}>Home</Link>&gt;<span>Profile</span>
        </div>
        <h2>Saved Builds</h2>
        <hr className="u-hr" />
        <div>Loading...</div>
      </main>
    );

  return (
    <main className="u-mainPage">
      <div style={{ width: '100%' }}>
        <Link to={'/'}>Home</Link>&gt;<span>Profile</span>
      </div>
      <h2>Saved Builds</h2>
      <hr className="u-hr" />
      {isLoading ? <div>Loading...</div> : <BuildsTable builds={userBuilds} />}
    </main>
  );
};

export default Profile;

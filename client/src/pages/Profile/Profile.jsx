import { useState, useEffect } from 'react';
import buildsService from '../../services/builds';
import BuildCard from '../../components/dark-souls-1/BuildCard/BuildCard';
import './Profile.css';

const Profile = () => {
  const [userBuilds, setUserBuilds] = useState([]);

  useEffect(() => {
    async function fetchBuilds() {
      const builds = await buildsService.getUserBuilds();
      setUserBuilds(builds);
    }

    fetchBuilds();
  }, []);

  return (
    <main className="u-mainPage">
      <h2>Saved Builds</h2>
      <hr className="u-hr" />
      {userBuilds.length > 0 ? (
        <div>
          {userBuilds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      ) : (
        <div>No builds saved...</div>
      )}
    </main>
  );
};

export default Profile;

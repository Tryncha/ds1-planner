import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAnonymousUserId } from '../../../services/anonymousUserId.js';
import buildService from '../../../services/builds.js';

import AuthContext from '../../../context/AuthContext.jsx';
import DS1BuildContext from '../../../context/DS1BuildContext.jsx';

import DS1Planner from './DS1Planner.jsx';
import Button from '../../../components/Button/Button.jsx';

const DS1Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const { build, updateBuild, loadBuild } = useContext(DS1BuildContext);

  const [buildOwner, setBuildOwner] = useState({ username: null, id: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBuild() {
      const loadedBuild = await loadBuild(id);

      if (loadedBuild.user) {
        setBuildOwner({ username: loadedBuild.user.username, id: loadedBuild.user.id });
      } else {
        setBuildOwner({ username: 'Anonymous', id: loadedBuild.anonymousUserId });
      }

      setIsLoading(false);
    }

    fetchBuild();
  }, [id, loadBuild]);

  function handleSubmit(event) {
    event.preventDefault();
    updateBuild(id, build);
    navigate('/');
  }

  function handleDelete(event) {
    event.preventDefault();
    buildService.deleteGameBuild('dark-souls-1', id);
    navigate('/');
  }

  function handleCancel(event) {
    event.preventDefault();
    navigate('/explorer');
  }

  const anonymousUserId = getAnonymousUserId();
  const isUserOwner = authInfo.id ? authInfo.id === buildOwner.id : anonymousUserId === buildOwner.id;

  if (isLoading)
    return (
      <main className="u-mainPage">
        <h2>{isUserOwner ? 'Edit' : 'View'} DS1 Character</h2>
        <hr className="u-hr" />
        <div>Loading...</div>
      </main>
    );

  return (
    <main className="u-mainPage">
      <h2>{isUserOwner ? 'Edit' : 'View'} DS1 Character</h2>
      <hr className="u-hr" />
      {isUserOwner ? null : (
        <span>
          Viewing <strong>{buildOwner.username}</strong> build
        </span>
      )}
      <form className="u-formPlanner" onSubmit={handleSubmit}>
        <DS1Planner />
        <div className="u-buttonsFormContainer">
          {isUserOwner ? (
            <>
              <Button modifier="success" type="submit">
                Update
              </Button>
              <Button onClick={handleDelete} modifier="danger">
                Delete
              </Button>
            </>
          ) : null}
          <Button onClick={handleCancel} modifier="warning">
            Go back
          </Button>
        </div>
      </form>
    </main>
  );
};

export default DS1Edit;

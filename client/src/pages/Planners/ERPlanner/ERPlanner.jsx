import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAnonymousUserId } from '../../../services/anonymousUserId.js';
import buildService from '../../../services/builds.js';

import AuthContext from '../../../context/AuthContext.jsx';
import ERBuildContext from '../../../context/ERBuildContext.jsx';

import { ATTRIBUTES } from '../../../constants/eldenRing.js';

import CharacterName from '../../../components/elden-ring/CharacterName/CharacterName.jsx';
import Gender from '../../../components/elden-ring/Gender/Gender.jsx';
import StartingClass from '../../../components/elden-ring/StartingClass/StartingClass.jsx';
import SoulLevel from '../../../components/elden-ring/SoulLevel/SoulLevel.jsx';
import MiniCaption from '../../../components/elden-ring/MiniCaption/MiniCaption.jsx';
import AttributeIO from '../../../components/elden-ring/AttributeIO/AttributeIO.jsx';
import Title from '../../../components/elden-ring/Title/Title.jsx';

const ERPlanner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const { build, buildDispatch, saveBuild, updateBuild } = useContext(ERBuildContext);
  const [buildOwner, setBuildOwner] = useState({ username: null, id: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authInfo.id) {
      setBuildOwner({ username: authInfo.username, id: authInfo.id });
    } else {
      const anonymousUserId = getAnonymousUserId();
      setBuildOwner({ username: 'Anonymous', id: anonymousUserId });
    }

    async function loadCharacter(id) {
      try {
        const loadedBuild = await buildService.getBuildById('elden-ring', id);

        if (loadedBuild.user) {
          setBuildOwner({ username: loadedBuild.user.username, id: loadedBuild.user.id });
        } else {
          setBuildOwner({ username: 'Anonymous', id: loadedBuild.anonymousUserId });
        }

        const buildData = {
          title: loadedBuild.title,
          description: loadedBuild.description,
          isPublic: loadedBuild.isPublic,
          tags: loadedBuild.tags,
          character: loadedBuild.character
        };

        buildDispatch({ type: 'LOAD_BUILD', payload: buildData });
        setIsLoading(false);
      } catch (error) {
        console.log('There was an error loading the build:', error);
      }
    }

    function resetCharacter() {
      buildDispatch({ type: 'RESET_BUILD' });
      setIsLoading(false);
    }

    id ? loadCharacter(id) : resetCharacter();
  }, [id, buildDispatch, authInfo]);

  function handleSubmit(event) {
    event.preventDefault();
    id ? updateBuild(id, build) : saveBuild(build);
    navigate('/');
  }

  function handleDelete(event) {
    event.preventDefault();
    buildService.deleteGameBuild('elden-ring', id);
    navigate('/');
  }

  function handleCancel(event) {
    event.preventDefault();
    id ? navigate('/explorer') : navigate('/planner');
  }

  let isUserOwner = false;

  if (authInfo.id) {
    isUserOwner = authInfo.id === buildOwner.id;
  } else {
    const anonymousUserId = getAnonymousUserId();
    isUserOwner = anonymousUserId === buildOwner.id;
  }

  if (isLoading)
    return (
      <main className="u-mainPage">
        <h2>{id ? 'Edit' : 'Create'} ER Character</h2>
        <hr className="u-hr" />
        <div>Loading...</div>
      </main>
    );

  return (
    <main className="u-mainPage">
      <h2>{id ? 'Edit' : 'Create'} ER Character</h2>
      <hr className="u-hr" />
      {isUserOwner ? null : (
        <span>
          Viewing <strong>{buildOwner.username}</strong> build
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <Title />
        <div className="u-container">
          <CharacterName />
          <Gender />
          <StartingClass />
        </div>
        <div className="u-container">
          <SoulLevel />
          <MiniCaption />
          {ATTRIBUTES.map((atrr) => (
            <AttributeIO key={atrr} attribute={atrr} />
          ))}
          <hr className="u-hr" />
        </div>
        {isUserOwner ? (
          <div>
            <button type="submit">{id ? 'Update' : 'Save'}</button>
            {id && <button onClick={handleDelete}>Delete</button>}
          </div>
        ) : null}
        <button onClick={handleCancel}>Go back</button>
      </form>
    </main>
  );
};

export default ERPlanner;

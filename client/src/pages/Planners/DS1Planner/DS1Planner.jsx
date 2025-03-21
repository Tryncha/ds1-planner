import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import buildService from '../../../services/builds';
import DS1BuildContext from '../../../context/DS1BuildContext';
import { ATTRIBUTES } from '../../../constants';
import CharacterName from '../../../components/dark-souls-1/CharacterName/CharacterName';
import Gender from '../../../components/dark-souls-1/Gender/Gender';
import StartingClass from '../../../components/dark-souls-1/StartingClass/StartingClass';
import SoulLevel from '../../../components/dark-souls-1/SoulLevel/SoulLevel';
import MiniCaption from '../../../components/dark-souls-1/MiniCaption/MiniCaption';
import AttributeIO from '../../../components/dark-souls-1/AttributeIO/AttributeIO';
import Humanity from '../../../components/dark-souls-1/Humanity/Humanity';
import Title from '../../../components/dark-souls-1/Title/Title';
import AuthContext from '../../../context/AuthContext';
import { getAnonymousUserId } from '../../../services/anonymousUserId';

const DS1Planner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const { build, buildDispatch, saveBuild, updateBuild } = useContext(DS1BuildContext);
  const [buildOwner, setBuildOwner] = useState({ username: null, id: null });
  // const [originalBuild, setOriginalBuild] = useState(null);

  useEffect(() => {
    if (authInfo.id) {
      setBuildOwner({ username: authInfo.username, id: authInfo.id });
    } else {
      const anonymousUserId = getAnonymousUserId();
      setBuildOwner({ username: 'Anonymous', id: anonymousUserId });
    }

    async function loadCharacter(id) {
      try {
        const loadedBuild = await buildService.getBuildById('dark-souls-1', id);

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

        // Deep copy of the original build to compare later
        // const newOriginalBuild = {
        //   ...loadedBuild.character,
        // }

        // setOriginalBuild(JSON.parse(JSON.stringify(loadedBuildClone)));
      } catch (error) {
        console.log('There was an error loading the build:', error);
      }
    }

    function resetCharacter() {
      buildDispatch({ type: 'RESET_BUILD' });
      // setOriginalBuild(null);
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
    buildService.deleteGameBuild('dark-souls-1', id);
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

  return (
    <main className="u-mainPage">
      <h2>{id ? 'Edit' : 'Create'} DS1 Character</h2>
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
          <Humanity />
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

export default DS1Planner;

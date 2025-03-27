import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAnonymousUserId } from '../../../services/anonymousUserId.js';
import buildService from '../../../services/builds.js';

import AuthContext from '../../../context/AuthContext.jsx';
import DS1BuildContext from '../../../context/DS1BuildContext.jsx';

import { ATTRIBUTES, STARTING_CLASSES } from '../../../constants/darkSouls1.js';
import startingClasses from '../../../assets/dark-souls-1/starting-classes.json';
import { getStartingClassData } from '../../../utils/index.js';

import Title from '../../../components/planners/common/Title/Title.jsx';
import CharacterName from '../../../components/planners/common/CharacterName/CharacterName.jsx';
import Gender from '../../../components/planners/common/Gender/Gender.jsx';
import StartingClass from '../../../components/planners/common/StartingClass/StartingClass.jsx';
import SoulLevel from '../../../components/planners/common/SoulLevel/SoulLevel.jsx';
import MiniCaption from '../../../components/planners/common/MiniCaption/MiniCaption.jsx';
import AttributeIO from '../../../components/planners/common/AttributeIO/AttributeIO.jsx';

import Humanity from '../../../components/planners/dark-souls-1/Humanity/Humanity.jsx';

const DS1Planner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const {
    build,
    setTitle,
    setCharacterName,
    setGender,
    setStartingClass,
    setAttribute,
    saveBuild,
    updateBuild,
    loadBuild,
    resetBuild
  } = useContext(DS1BuildContext);

  const [buildOwner, setBuildOwner] = useState({ username: null, id: null });
  const [isLoading, setIsLoading] = useState(true);

  const startingClassData = getStartingClassData(startingClasses, build.character.startingClass);

  useEffect(() => {
    async function fetchBuild() {
      if (id) {
        const loadedBuild = await loadBuild(id);

        if (loadedBuild.user) {
          setBuildOwner({ username: loadedBuild.user.username, id: loadedBuild.user.id });
        } else {
          setBuildOwner({ username: 'Anonymous', id: loadedBuild.anonymousUserId });
        }
      } else {
        resetBuild();

        if (authInfo.id) {
          setBuildOwner({ username: authInfo.username, id: authInfo.id });
        } else {
          const anonymousUserId = getAnonymousUserId();
          setBuildOwner({ username: 'Anonymous', id: anonymousUserId });
        }
      }
      setIsLoading(false);
    }

    fetchBuild();
  }, [authInfo.id, authInfo.username, id, loadBuild, resetBuild]);

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

  const anonymousUserId = getAnonymousUserId();
  const isUserOwner = authInfo.id ? authInfo.id === buildOwner.id : anonymousUserId === buildOwner.id;

  if (isLoading)
    return (
      <main className="u-mainPage">
        <h2>{id ? 'Edit' : 'Create'} DS1 Character</h2>
        <hr className="u-hr" />
        <div>Loading...</div>
      </main>
    );

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
        <Title value={build.title} onChange={setTitle} />
        <div className="u-container">
          <CharacterName
            value={build.character.name}
            onChange={setCharacterName}
            maxLength={16} // This is the character name limit in game
            placeholder="Chosen Undead"
          />
          <Gender value={build.character.gender} onChange={setGender} options={['male', 'female']} />
          <StartingClass value={build.character.startingClass} onChange={setStartingClass} options={STARTING_CLASSES} />
        </div>
        <div className="u-container">
          <SoulLevel
            soulLevelBase={startingClassData.soulLevelBase}
            basePoints={startingClassData.basePoints}
            attributes={build.character.attributes}
          />
          <MiniCaption />
          {ATTRIBUTES.map((attr) => (
            <AttributeIO
              key={attr}
              character={build.character}
              startingClasses={startingClasses}
              attribute={attr}
              updateAttributeValue={setAttribute}
            />
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

import { useContext, useEffect } from 'react';
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

const DS1Planner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { build, buildDispatch, saveBuild, updateBuild } = useContext(DS1BuildContext);
  // const [originalBuild, setOriginalBuild] = useState(null);

  useEffect(() => {
    async function loadCharacter(id) {
      const loadedBuild = await buildService.getBuildById('dark-souls-1', id);
      buildDispatch({ type: 'LOAD_BUILD', payload: loadedBuild });

      // Deep copy of the original build to compare later
      // const newOriginalBuild = {
      //   ...loadedBuild.character,
      // }

      // setOriginalBuild(JSON.parse(JSON.stringify(loadedBuildClone)));
    }

    function resetCharacter() {
      buildDispatch({ type: 'RESET_BUILD' });
      // setOriginalBuild(null);
    }

    id ? loadCharacter(id) : resetCharacter();
  }, [id, buildDispatch]);

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
    id ? navigate('/explorer') : navigate('/');
  }

  return (
    <div>
      <h2>{id ? 'Edit' : 'Create'} DS1 Character</h2>
      <form onSubmit={handleSubmit}>
        <div className="u-container">
          <Title />
        </div>
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
        <button type="submit">{id ? 'Update' : 'Create'}</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default DS1Planner;

import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import buildsService from '../services/builds';
import BuildContext from '../context/BuildContext';
import { ATTRIBUTES } from '../constants';
import CharacterName from '../components/CharacterName';
import Gender from '../components/Gender';
import StartingClass from '../components/StartingClass';
import SoulLevel from '../components/SoulLevel';
import MiniCaption from '../components/MiniCaption';
import AttributeIO from '../components/AttributeIO';
import Humanity from '../components/Humanity';

const Planner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { build, buildDispatch, saveBuild, updateBuild } = useContext(BuildContext);
  // const [originalBuild, setOriginalBuild] = useState(null);

  useEffect(() => {
    async function loadCharacter(buildId) {
      const loadedBuild = await buildsService.getOne(buildId);
      buildDispatch({ type: 'LOAD_CHARACTER', payload: loadedBuild.character });

      // Deep copy of the original build to compare later
      // const newOriginalBuild = {
      //   ...loadedBuild.character,
      // }

      // setOriginalBuild(JSON.parse(JSON.stringify(loadedBuildClone)));
    }

    function resetCharacter() {
      buildDispatch({ type: 'RESET_CHARACTER' });
      // setOriginalBuild(null);
    }

    if (id) {
      loadCharacter(id);
    } else {
      resetCharacter();
    }
  }, [id, buildDispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    const buildClone = { ...build };

    if (id) {
      updateBuild(id, buildClone);
    } else {
      saveBuild(buildClone);
    }
    navigate('/');
  }

  async function handleCancel(event) {
    event.preventDefault();

    if (id) {
      navigate('/explorer');
    } else {
      navigate('/');
    }
  }

  return (
    <div>
      <h2>{id ? 'Edit' : 'Create'} Character</h2>
      <form onSubmit={handleSubmit}>
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
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Planner;

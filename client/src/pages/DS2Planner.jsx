import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import buildsService from '../services/builds';
import { ATTRIBUTES } from '../constants';
import CharacterName from '../components/dark-souls-2/CharacterName';
import Gender from '../components/dark-souls-2/Gender';
import StartingClass from '../components/dark-souls-2/StartingClass';
import SoulLevel from '../components/dark-souls-2/SoulLevel';
import MiniCaption from '../components/dark-souls-2/MiniCaption';
import AttributeIO from '../components/dark-souls-2/AttributeIO';
import Humanity from '../components/dark-souls-2/Humanity';
import BuildContext from '../context/BuildDS2Context';

const PlannerDS2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { build, buildDispatch, saveBuild, updateBuild } = useContext(BuildContext);

  useEffect(() => {
    async function loadCharacter(buildId) {
      const loadedBuild = await buildsService.getOne(buildId);
      buildDispatch({ type: 'LOAD_CHARACTER', payload: loadedBuild.character });
    }

    function resetCharacter() {
      buildDispatch({ type: 'RESET_CHARACTER' });
    }

    id ? loadCharacter(id) : resetCharacter();
  }, [id, buildDispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    const buildClone = { ...build };

    id ? updateBuild(id, buildClone) : saveBuild(buildClone);
    navigate('/');
  }

  async function handleCancel(event) {
    event.preventDefault();
    id ? navigate('/explorer') : navigate('/');
  }

  return (
    <div>
      <h1>DS2</h1>
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

export default PlannerDS2;

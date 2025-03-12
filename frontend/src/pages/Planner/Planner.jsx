import { ATTRIBUTES } from '../../constants';
import AttributeIO from '../../components/AttributeIO';
import MiniCaption from '../../components/MiniCaption';
import CharacterName from '../../components/CharacterName';
import Gender from '../../components/Gender';
import SoulLevel from '../../components/SoulLevel';
import StartingClass from '../../components/StartingClass';
import Humanity from '../../components/Humanity';

const Planner = () => {
  return (
    <div>
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
    </div>
  );
};

export default Planner;

import AttributeIO from './components/AttributeIO';
import CharacterName from './components/CharacterName';
import Gender from './components/Gender';
import StartingClass from './components/StartingClass';
import { ATTRIBUTES } from './constants';

const App = () => {
  return (
    <div className="u-container">
      <CharacterName />
      <Gender />
      <StartingClass />
      <hr className="u-hr" />
      {ATTRIBUTES.map((atrr) => (
        <AttributeIO key={atrr} attribute={atrr} />
      ))}
    </div>
  );
};

export default App;

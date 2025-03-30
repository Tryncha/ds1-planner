import { useContext } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';
import { ATTRIBUTES, GENDERS, STARTING_CLASSES, titlePlaceholders } from '../../../constants/darkSouls1';
import CharacterName from '../../../components/planners/common/CharacterName/CharacterName';
import Title from '../../../components/planners/common/Title/Title';
import Gender from '../../../components/planners/common/Gender/Gender';
import StartingClass from '../../../components/planners/common/StartingClass/StartingClass';
import SoulLevel from '../../../components/planners/common/SoulLevel/SoulLevel';
import MiniCaption from '../../../components/planners/common/MiniCaption/MiniCaption';
import AttributeIO from '../../../components/planners/common/AttributeIO/AttributeIO';
import Humanity from '../../../components/planners/dark-souls-1/Humanity/Humanity';
import Tags from '../../../components/planners/common/Tags/Tags';
import Description from '../../../components/planners/common/Description/Description';

const DS1Planner = () => {
  const {
    build,
    startingClassData,
    setTitle,
    setDescription,
    toggleTag,
    setCharacterName,
    setGender,
    setStartingClass,
    setAttribute
  } = useContext(DS1BuildContext);

  return (
    <>
      <Title value={build.title} onChange={setTitle} titlePlaceholders={titlePlaceholders} />
      <div className="u-container">
        <Tags tags={build.tags} toggleTag={toggleTag} />
      </div>
      <div className="u-container">
        <CharacterName
          value={build.character.name}
          onChange={setCharacterName}
          maxLength={16} // This is the character name limit in game
          placeholder="Chosen Undead"
        />
        <Gender value={build.character.gender} onChange={setGender} options={GENDERS} />
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
            key={attr.slice(0, 3)}
            attribute={attr}
            value={build.character.attributes[attr]}
            baseValue={startingClassData.baseAttributes[attr]}
            setAttribute={setAttribute}
          />
        ))}
        <hr className="u-hr" />
        <Humanity />
      </div>
      <div className="u-container">
        <Description value={build.description} onChange={setDescription} />
      </div>
    </>
  );
};

export default DS1Planner;

// TO-DO:
// Agregar atributo name a todos los elementos del form

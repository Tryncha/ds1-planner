import { useContext } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';
import {
  ATTRIBUTES,
  GENDERS,
  STARTING_CLASSES,
  titlePlaceholders,
  statIcons,
  COVENANTS
} from '../../../constants/darkSouls1';
import CharacterName from '../../../components/planners/common/CharacterName/CharacterName';
import Title from '../../../components/planners/common/Title/Title';
import Gender from '../../../components/planners/common/Gender/Gender';
import StartingClass from '../../../components/planners/common/StartingClass/StartingClass';
import MiniCaption from '../../../components/planners/common/MiniCaption/MiniCaption';
import AttributeIO from '../../../components/planners/common/AttributeIO/AttributeIO';
import Humanity from '../../../components/planners/dark-souls-1/Humanity/Humanity';
import Tags from '../../../components/planners/common/Tags/Tags';
import Description from '../../../components/planners/common/Description/Description';
import StaticStat from '../../../components/planners/common/Stats/StaticStat/StaticStat';
import DynamicStat from '../../../components/planners/common/Stats/DynamicStat/DynamicStat';
import { getHealth, getStamina } from '../../../utils/darkSouls1';
import EquipLoad from '../../../components/planners/common/Stats/EquipLoad/EquipLoad';

import '../Planners.css';
import { calculateSoulLevel } from '../../../utils';
import PlannerSelect from '../../../components/planners/common/PlannerSelect/PlannerSelect';
import EquipmentSlot from '../../../components/planners/common/Slots/EquipmentSlot/EquipmentSlot';
import WeaponSlot from '../../../components/planners/common/Slots/WeaponSlot/WeaponSlot';
import ArmorSlot from '../../../components/planners/common/Slots/ArmorSlot/ArmorSlot';
import Fieldset from '../../../components/planners/common/Fieldset/Fieldset';

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
    setAttribute,
    setCovenant
  } = useContext(DS1BuildContext);

  return (
    <>
      <Title value={build.title} onChange={setTitle} titlePlaceholders={titlePlaceholders} />
      <div className="u-plannerColumns">
        <div className="u-md-plannerColumn">
          <Fieldset legend="Tags">
            <Tags tags={build.tags} toggleTag={toggleTag} />
          </Fieldset>
          <div className="u-plannerContainer">
            <CharacterName
              value={build.character.name}
              onChange={setCharacterName}
              maxLength={16} // This is the character name limit in game
              placeholder="Chosen Undead"
            />
            <Gender value={build.character.gender} onChange={setGender} options={GENDERS} />
            <StartingClass
              value={build.character.startingClass}
              onChange={setStartingClass}
              options={STARTING_CLASSES}
            />
            <hr className="u-hr" />
            <StaticStat
              icon={statIcons.soulLevel}
              stat="Soul Level"
              value={calculateSoulLevel(
                startingClassData.soulLevelBase,
                startingClassData.basePoints,
                build.character.attributes
              )}
            />
            <MiniCaption />
            {ATTRIBUTES.map((attr) => (
              <AttributeIO
                key={attr.slice(0, 3)}
                icon={statIcons[attr]}
                attribute={attr}
                value={build.character.attributes[attr]}
                baseValue={startingClassData.baseAttributes[attr]}
                setAttribute={setAttribute}
              />
            ))}
            <hr className="u-hr" />
            <Humanity icon={statIcons.humanity} />
            <hr className="u-hr" />
            <StaticStat
              stat="Souls to Next Level"
              value={calculateSoulLevel(
                startingClassData.soulLevelBase,
                startingClassData.basePoints,
                build.character.attributes
              )}
            />
            <StaticStat
              stat="Total Souls Spent"
              value={calculateSoulLevel(
                startingClassData.soulLevelBase,
                startingClassData.basePoints,
                build.character.attributes
              )}
            />
            <hr className="u-hr" />
            <PlannerSelect
              label="Covenant"
              value={build.character.covenant}
              onChange={setCovenant}
              options={COVENANTS}
            />
          </div>
          <Fieldset legend="Description">
            <Description value={build.description} onChange={setDescription} />
          </Fieldset>
        </div>
        <div className="u-lg-plannerColumn">
          <Fieldset legend="Weapons">
            <div className="u-equipmentContainer">
              <WeaponSlot />
              <WeaponSlot />
            </div>
            <hr className="u-hr" />
            <div className="u-equipmentContainer">
              <WeaponSlot />
              <WeaponSlot />
            </div>
          </Fieldset>
          <Fieldset legend="Armor">
            <div className="u-equipmentContainer">
              <ArmorSlot />
              <ArmorSlot />
              <ArmorSlot />
              <ArmorSlot />
            </div>
          </Fieldset>
          <Fieldset legend="Rings">
            <div className="u-equipmentContainer">
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
            </div>
          </Fieldset>
          <Fieldset legend="Spells">
            <div className="u-spellsContainer">
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
              <EquipmentSlot size="sm" />
            </div>
          </Fieldset>
        </div>
        <div className="u-md-plannerColumn">
          <Fieldset legend="Stats">
            <DynamicStat
              icon={statIcons.health}
              stat="Health"
              value={getHealth(build.character.attributes.vitality)}
              percentage={(getHealth(build.character.attributes.vitality) * 100) / 1900}
              color="#491818"
            />
            <DynamicStat
              icon={statIcons.stamina}
              stat="Stamina"
              value={getStamina(build.character.attributes.endurance)}
              percentage={(getStamina(build.character.attributes.endurance) * 100) / 160}
              color="#0c2c0c"
            />
            <EquipLoad />
            <StaticStat icon={statIcons.poise} stat="Poise" value={50} />
            <StaticStat icon={statIcons.itemDiscovery} stat="item Discovery" value={50} />
            <hr className="u-hr" />
            <StaticStat icon={statIcons.physicalDefense} stat="Physical Defense" value={50} />
            <StaticStat icon={statIcons.strikeDefense} stat="Strike Defense" value={50} />
            <StaticStat icon={statIcons.slashDefense} stat="Slash Defense" value={50} />
            <StaticStat icon={statIcons.thrustDefense} stat="Thrust Defense" value={50} />
            <hr className="u-hr" />
            <StaticStat icon={statIcons.magicDefense} stat="Magic Defense" value={50} />
            <StaticStat icon={statIcons.fireDefense} stat="Fire Defense" value={50} />
            <StaticStat icon={statIcons.lightningDefense} stat="Lightning Defense" value={50} />
            <hr className="u-hr" />
            <StaticStat icon={statIcons.bleedResistance} stat="Bleed Resistance" value={50} />
            <StaticStat icon={statIcons.poisonResistance} stat="Poison Resistance" value={50} />
            <StaticStat icon={statIcons.curseResistance} stat="Curse Resistance" value={50} />
          </Fieldset>
        </div>
      </div>
    </>
  );
};

export default DS1Planner;

// TO-DO:
// Agregar atributo name a todos los elementos del form

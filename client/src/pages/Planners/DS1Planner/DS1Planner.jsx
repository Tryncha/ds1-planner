import { useContext, useEffect, useState } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';
import {
  ATTRIBUTES,
  GENDERS,
  STARTING_CLASSES,
  // titlePlaceholders,
  statIcons,
  COVENANTS
} from '../../../constants/darkSouls1';
import CharacterName from '../../../components/planners/common/CharacterName/CharacterName';
// import Title from '../../../components/planners/common/Title/Title';
import Gender from '../../../components/planners/common/Gender/Gender';
import StartingClass from '../../../components/planners/common/StartingClass/StartingClass';
import MiniCaption from '../../../components/planners/common/MiniCaption/MiniCaption';
import AttributeIO from '../../../components/planners/common/AttributeIO/AttributeIO';
import Humanity from '../../../components/planners/dark-souls-1/Humanity/Humanity';
import Tags from '../../../components/planners/common/Tags/Tags';
// import Description from '../../../components/planners/common/Description/Description';
import StaticStat from '../../../components/planners/common/Stats/StaticStat/StaticStat';
import DynamicStat from '../../../components/planners/common/Stats/DynamicStat/DynamicStat';
import {
  calculateAttunementSlots,
  calculateHealth,
  calculateSoulsToLevel,
  calculateStamina,
  calculateTotalSoulsSpent
} from '../../../utils/darkSouls1';
import EquipLoad from '../../../components/planners/common/Stats/EquipLoad/EquipLoad';

import '../Planners.css';
import { calculateSoulLevel } from '../../../utils';
import PlannerSelect from '../../../components/planners/common/PlannerSelect/PlannerSelect';
// import EquipmentSlot from '../../../components/planners/common/Slots/EquipmentSlot/EquipmentSlot';
import WeaponSlot from '../../../components/planners/common/Slots/WeaponSlot/WeaponSlot';
import ArmorSlot from '../../../components/planners/common/Slots/ArmorSlot/ArmorSlot';
import Fieldset from '../../../components/planners/common/Fieldset/Fieldset';

import weaponsData from '../../../assets/dark-souls-1/weapons.json';
import armorData from '../../../assets/dark-souls-1/armor.json';
import RingSlot from '../../../components/planners/common/Slots/RingSlot/RingSlot';
import SpellSlot from '../../../components/planners/common/Slots/SpellSlot/SpellSlot';

const DS1Planner = () => {
  const {
    build,
    startingClassData,
    // setTitle,
    // setDescription,
    toggleTag,
    setCharacterName,
    setGender,
    setStartingClass,
    setAttribute,
    setCovenant,
    createSetWeapon,
    createSetArmor,
    createSetRing,
    createSetSpell
  } = useContext(DS1BuildContext);

  const [stats, setStats] = useState({});

  useEffect(() => {
    const newSoulLevel = calculateSoulLevel(
      startingClassData.soulLevelBase,
      startingClassData.basePoints,
      build.character.attributes
    );

    const newStats = {
      health: calculateHealth(build.character.attributes.vitality),
      stamina: calculateStamina(build.character.attributes.endurance),
      soulLevel: newSoulLevel,
      soulsToNextLevel: calculateSoulsToLevel(newSoulLevel + 1),
      totalSoulsSpent: calculateTotalSoulsSpent(startingClassData.soulLevelBase, newSoulLevel),
      attunementSlots: calculateAttunementSlots(build.character.attributes.attunement)
    };

    setStats(newStats);
  }, [build, startingClassData]);

  const weaponsNames = weaponsData.map((wpn) => wpn.name);

  const helmsData = armorData.filter((arm) => arm.type === 'helm');
  const chestsData = armorData.filter((arm) => arm.type === 'chest');
  const gauntletsData = armorData.filter((arm) => arm.type === 'gauntlet');
  const leggingsData = armorData.filter((arm) => arm.type === 'leggings');

  const helmsNames = helmsData.map((hlm) => hlm.name);
  const chestsNames = chestsData.map((chs) => chs.name);
  const gauntletsNames = gauntletsData.map((gnt) => gnt.name);
  const leggingsNames = leggingsData.map((leg) => leg.name);

  const rings = ['none', 'opt1', 'opt2', 'opt3'];
  const spells = ['none', 'opt1', 'opt2', 'opt3'];

  const currentEquipmentData = {
    weapons: [
      weaponsData.find((wpn) => wpn.name === build.character.equipment.weapons[0].name),
      weaponsData.find((wpn) => wpn.name === build.character.equipment.weapons[1].name),
      weaponsData.find((wpn) => wpn.name === build.character.equipment.weapons[2].name),
      weaponsData.find((wpn) => wpn.name === build.character.equipment.weapons[3].name)
    ],
    armor: [
      armorData.find((arm) => arm.name === build.character.equipment.armor[0].name),
      armorData.find((arm) => arm.name === build.character.equipment.armor[1].name),
      armorData.find((arm) => arm.name === build.character.equipment.armor[2].name),
      armorData.find((arm) => arm.name === build.character.equipment.armor[3].name)
    ]
  };

  console.log(currentEquipmentData);

  return (
    <>
      {/* <Title value={build.title} onChange={setTitle} titlePlaceholders={titlePlaceholders} /> */}
      <div className="u-plannerColumns">
        <div className="u-md-plannerColumn">
          <Fieldset legend="Tags">
            <Tags tags={build.tags} toggleTag={toggleTag} />
          </Fieldset>
          <Fieldset legend="Character">
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
            <StaticStat icon={statIcons.soulLevel} stat="Soul Level" value={stats.soulLevel} />
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
            <StaticStat stat="Souls to Next Level" value={stats.soulsToNextLevel} />
            <StaticStat stat="Total Souls Spent" value={stats.totalSoulsSpent} />
            <hr className="u-hr" />
            <PlannerSelect
              label="Covenant"
              value={build.character.covenant}
              onChange={setCovenant}
              options={COVENANTS}
            />
          </Fieldset>
          {/* <Fieldset legend="Description">
            <Description value={build.description} onChange={setDescription} />
          </Fieldset> */}
        </div>
        <div className="u-lg-plannerColumn">
          <Fieldset legend="Weapons">
            <div className="u-equipmentContainer">
              <WeaponSlot
                value={build.character.equipment.weapons[0].name}
                setWeapon={createSetWeapon(0)}
                // upgrade={}
                // setUpgrade={}
                // upgradeLevel={}
                // setUpgradeLevel={}
                options={weaponsNames}
              />
              <WeaponSlot
                value={build.character.equipment.weapons[1].name}
                setWeapon={createSetWeapon(1)}
                // upgrade={}
                // setUpgrade={}
                // upgradeLevel={}
                // setUpgradeLevel={}
                options={weaponsNames}
              />
            </div>
            <hr className="u-hr" />
            <div className="u-equipmentContainer">
              <WeaponSlot
                value={build.character.equipment.weapons[2].name}
                setWeapon={createSetWeapon(2)}
                // upgrade={}
                // setUpgrade={}
                // upgradeLevel={}
                // setUpgradeLevel={}
                options={weaponsNames}
              />
              <WeaponSlot
                value={build.character.equipment.weapons[3].name}
                setWeapon={createSetWeapon(3)}
                // upgrade={}
                // setUpgrade={}
                // upgradeLevel={}
                // setUpgradeLevel={}
                options={weaponsNames}
              />
            </div>
          </Fieldset>
          <Fieldset legend="Armor">
            <div className="u-equipmentContainer">
              <ArmorSlot
                value={build.character.equipment.armor[0].name}
                setArmor={createSetArmor(0)}
                options={helmsNames}
              />
              <ArmorSlot
                value={build.character.equipment.armor[1].name}
                setArmor={createSetArmor(1)}
                options={chestsNames}
              />
              <ArmorSlot
                value={build.character.equipment.armor[2].name}
                setArmor={createSetArmor(2)}
                options={gauntletsNames}
              />
              <ArmorSlot
                value={build.character.equipment.armor[3].name}
                setArmor={createSetArmor(3)}
                options={leggingsNames}
              />
            </div>
          </Fieldset>
          <Fieldset legend="Rings">
            <div className="u-equipmentContainer">
              <RingSlot value={build.character.equipment.rings[0]} setRing={createSetRing(0)} options={rings} />
              <RingSlot value={build.character.equipment.rings[1]} setRing={createSetRing(1)} options={rings} />
            </div>
          </Fieldset>
          <Fieldset legend={`Spells ${stats.attunementSlots ? stats.attunementSlots : 0}/10`}>
            <div className="u-spellsContainer">
              {stats.attunementSlots > 0 ? (
                Array(stats.attunementSlots)
                  .fill('none')
                  .map((slt, i) => (
                    <SpellSlot
                      key={`${slt}${i}`}
                      value={build.character.equipment.spells[i]}
                      setSpell={createSetSpell(i)}
                      options={spells}
                    />
                  ))
              ) : (
                <span className="u-textWithIcon">
                  Not enough
                  <img src={statIcons.attunement} alt="Attunement" />
                  Attunement
                </span>
              )}
            </div>
          </Fieldset>
        </div>
        <div className="u-md-plannerColumn">
          <Fieldset legend="Stats">
            <DynamicStat
              icon={statIcons.health}
              stat="Health"
              value={stats.health}
              percentage={(stats.health * 100) / 1900}
              color="#491818"
            />
            <DynamicStat
              icon={statIcons.stamina}
              stat="Stamina"
              value={stats.stamina}
              percentage={(stats.stamina * 100) / 160}
              color="#0c2c0c"
            />
            <EquipLoad />
            <StaticStat icon={statIcons.poise} stat="Poise" value={50} />
            <StaticStat icon={statIcons.itemDiscovery} stat="item Discovery" value={50} />
          </Fieldset>
          <Fieldset legend="Defenses">
            <StaticStat icon={statIcons.physicalDefense} stat="Physical Defense" value={50} />
            <StaticStat icon={statIcons.strikeDefense} stat="Strike Defense" value={50} />
            <StaticStat icon={statIcons.slashDefense} stat="Slash Defense" value={50} />
            <StaticStat icon={statIcons.thrustDefense} stat="Thrust Defense" value={50} />
            <hr className="u-hr" />
            <StaticStat icon={statIcons.magicDefense} stat="Magic Defense" value={50} />
            <StaticStat icon={statIcons.fireDefense} stat="Fire Defense" value={50} />
            <StaticStat icon={statIcons.lightningDefense} stat="Lightning Defense" value={50} />
          </Fieldset>
          <Fieldset legend="Resistances">
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

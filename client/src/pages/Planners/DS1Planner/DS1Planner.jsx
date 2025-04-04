import { useContext, useEffect, useState } from 'react';
import DS1BuildContext from '../../../context/DS1BuildContext';
import {
  ATTRIBUTES,
  GENDERS,
  STARTING_CLASSES,
  // titlePlaceholders,
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
  calculateArmorDefense,
  calculateArmorResistance,
  calculateAttunementSlots,
  calculateHealth,
  calculatePoise,
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
import ringsData from '../../../assets/dark-souls-1/rings.json';

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
    createSetWeaponUpgrade,
    createSetWeaponUpgradeLevel,
    createSetArmor,
    createSetRing,
    createSetSpell
  } = useContext(DS1BuildContext);

  const initialEquipmentData = {
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

  const [equipmentData, setEquipmentData] = useState(initialEquipmentData);
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
      attunementSlots: calculateAttunementSlots(build.character.attributes.attunement),
      poise: calculatePoise(equipmentData.armor),
      defenses: {
        physical: {
          normal: calculateArmorDefense(equipmentData.armor, 'physical', 'normal'),
          strike: calculateArmorDefense(equipmentData.armor, 'physical', 'strike'),
          slash: calculateArmorDefense(equipmentData.armor, 'physical', 'slash'),
          thrust: calculateArmorDefense(equipmentData.armor, 'physical', 'thrust')
        },
        elemental: {
          magic: calculateArmorDefense(equipmentData.armor, 'elemental', 'magic'),
          fire: calculateArmorDefense(equipmentData.armor, 'elemental', 'fire'),
          lightning: calculateArmorDefense(equipmentData.armor, 'elemental', 'lightning')
        }
      },
      resistances: {
        bleed: calculateArmorResistance(equipmentData.armor, 'bleed'),
        poison: calculateArmorResistance(equipmentData.armor, 'poison'),
        curse: calculateArmorResistance(equipmentData.armor, 'curse')
      }
    };

    setStats(newStats);
  }, [build, startingClassData, equipmentData]);

  const weaponsNames = weaponsData.map((wpn) => wpn.name);
  const weaponUpgrades = [
    'regular',
    'divine',
    'occult',
    'magic',
    'enchanted',
    'crystal',
    'raw',
    'fire',
    'chaos',
    'lightning'
  ];

  const weaponUpgradesLevels = Array.from({ length: 16 }, (_, i) => i);

  const helmsData = armorData.filter((arm) => arm.type === 'helm');
  const chestsData = armorData.filter((arm) => arm.type === 'chest');
  const gauntletsData = armorData.filter((arm) => arm.type === 'gauntlets');
  const leggingsData = armorData.filter((arm) => arm.type === 'leggings');

  const helmsNames = helmsData.map((hlm) => hlm.name);
  const chestsNames = chestsData.map((chs) => chs.name);
  const gauntletsNames = gauntletsData.map((gnt) => gnt.name);
  const leggingsNames = leggingsData.map((leg) => leg.name);

  const rings = ringsData.map((rng) => rng.name);
  const spells = ['none', 'opt1', 'opt2', 'opt3'];

  useEffect(() => {
    const newEquipmentData = {
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

    setEquipmentData(newEquipmentData);
  }, [build.character.equipment]);

  console.log('equipmentData:', equipmentData);

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
            <StaticStat icon stat="soul-level" value={stats.soulLevel} />
            <MiniCaption />
            {ATTRIBUTES.map((attr) => (
              <AttributeIO
                key={attr.slice(0, 3)}
                iconSrc={`/dark-souls-1/images/stat-icons/${attr}.png`}
                attribute={attr}
                value={build.character.attributes[attr]}
                baseValue={startingClassData.baseAttributes[attr]}
                setAttribute={setAttribute}
              />
            ))}
            <hr className="u-hr" />
            <Humanity iconSrc="/dark-souls-1/images/stat-icons/humanity.png" />
            <hr className="u-hr" />
            <StaticStat stat="souls-to-next-level" value={stats.soulsToNextLevel} />
            <StaticStat stat="total-souls-spent" value={stats.totalSoulsSpent} />
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
              {Array.from({ length: 2 }, (_, i) => (
                <WeaponSlot
                  value={build.character.equipment.weapons[i].name}
                  setWeapon={createSetWeapon(i)}
                  upgrade={build.character.equipment.weapons[i].upgrade}
                  setUpgrade={createSetWeaponUpgrade(i)}
                  upgradeLevel={build.character.equipment.weapons[i].upgradeLevel}
                  setUpgradeLevel={createSetWeaponUpgradeLevel(i)}
                  options={weaponsNames}
                  upgradeOptions={weaponUpgrades}
                  upgradeLevelOptions={weaponUpgradesLevels}
                />
              ))}
            </div>
            <hr className="u-hr" />
            <div className="u-equipmentContainer">
              {Array.from({ length: 2 }, (_, i) => (
                <WeaponSlot
                  value={build.character.equipment.weapons[i + 2].name}
                  setWeapon={createSetWeapon(i + 2)}
                  upgrade={build.character.equipment.weapons[i + 2].upgrade}
                  setUpgrade={createSetWeaponUpgrade(i + 2)}
                  upgradeLevel={build.character.equipment.weapons[i + 2].upgradeLevel}
                  setUpgradeLevel={createSetWeaponUpgradeLevel(i + 2)}
                  options={weaponsNames}
                  upgradeOptions={weaponUpgrades}
                  upgradeLevelOptions={weaponUpgradesLevels}
                />
              ))}
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
              {Array.from({ length: 2 }, (_, i) => (
                <RingSlot value={build.character.equipment.rings[i]} setRing={createSetRing(i)} options={rings} />
              ))}
            </div>
          </Fieldset>
          <Fieldset legend={`Spells ${stats.attunementSlots ? stats.attunementSlots : 0}/10`}>
            <div className="u-spellsContainer">
              {stats.attunementSlots > 0 ? (
                Array.from({ length: stats.attunementSlots }, (_, i) => (
                  <SpellSlot
                    value={build.character.equipment.spells[i]}
                    setSpell={createSetSpell(i)}
                    options={spells}
                  />
                ))
              ) : (
                <span className="u-textWithIcon">
                  Not enough
                  <img src="/dark-souls-1/images/stat-icons/attunement.png" alt="Attunement" />
                  Attunement
                </span>
              )}
            </div>
          </Fieldset>
        </div>
        <div className="u-md-plannerColumn">
          <Fieldset legend="Stats">
            <DynamicStat
              icon
              stat="health"
              value={stats.health}
              percentage={(stats.health * 100) / 1900}
              color="#491818"
            />
            <DynamicStat
              icon
              stat="stamina"
              value={stats.stamina}
              percentage={(stats.stamina * 100) / 160}
              color="#0c2c0c"
            />
            <EquipLoad />
            <StaticStat icon stat="poise" value={stats.poise} />
            <StaticStat icon stat="item-discovery" value={100} />
          </Fieldset>
          <Fieldset legend="Defenses">
            <StaticStat icon stat="normal-defense" value={stats.defenses?.physical.normal} />
            <StaticStat icon stat="strike-defense" value={stats.defenses?.physical.strike} />
            <StaticStat icon stat="slash-defense" value={stats.defenses?.physical.slash} />
            <StaticStat icon stat="thrust-defense" value={stats.defenses?.physical.thrust} />
            <hr className="u-hr" />
            <StaticStat icon stat="magic-defense" value={stats.defenses?.elemental.magic} />
            <StaticStat icon stat="fire-defense" value={stats.defenses?.elemental.fire} />
            <StaticStat icon stat="lightning-defense" value={stats.defenses?.elemental.lightning} />
          </Fieldset>
          <Fieldset legend="Resistances">
            <StaticStat icon stat="bleed-resistance" value={stats.resistances?.bleed} />
            <StaticStat icon stat="poison-resistance" value={stats.resistances?.poison} />
            <StaticStat icon stat="curse-resistance" value={stats.resistances?.curse} />
          </Fieldset>
        </div>
      </div>
    </>
  );
};

export default DS1Planner;

// TO-DO:
// Agregar atributo name a todos los elementos del form

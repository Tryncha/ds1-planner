import soulLevel from '../assets/dark-souls-1/images/stat-icons/soul_level.png';
import humanity from '../assets/dark-souls-1/images/stat-icons/humanity.png';

import vitality from '../assets/dark-souls-1/images/stat-icons/vitality.png';
import attunement from '../assets/dark-souls-1/images/stat-icons/attunement.png';
import endurance from '../assets/dark-souls-1/images/stat-icons/endurance.png';
import strength from '../assets/dark-souls-1/images/stat-icons/strength.png';
import dexterity from '../assets/dark-souls-1/images/stat-icons/dexterity.png';
import resistance from '../assets/dark-souls-1/images/stat-icons/resistance.png';
import intelligence from '../assets/dark-souls-1/images/stat-icons/intelligence.png';
import faith from '../assets/dark-souls-1/images/stat-icons/faith.png';

import health from '../assets/dark-souls-1/images/stat-icons/health.png';
import stamina from '../assets/dark-souls-1/images/stat-icons/stamina.png';
import equipLoad from '../assets/dark-souls-1/images/stat-icons/equip_load.png';
import poise from '../assets/dark-souls-1/images/stat-icons/poise.png';
import itemDiscovery from '../assets/dark-souls-1/images/stat-icons/item_discovery.png';
import physicalDefense from '../assets/dark-souls-1/images/stat-icons/physical_defense.png';
import strikeDefense from '../assets/dark-souls-1/images/stat-icons/strike_defense.png';
import slashDefense from '../assets/dark-souls-1/images/stat-icons/slash_defense.png';
import thrustDefense from '../assets/dark-souls-1/images/stat-icons/thrust_defense.png';
import magicDefense from '../assets/dark-souls-1/images/stat-icons/magic_defense.png';
import fireDefense from '../assets/dark-souls-1/images/stat-icons/fire_defense.png';
import lightningDefense from '../assets/dark-souls-1/images/stat-icons/lightning_defense.png';
import bleedResistance from '../assets/dark-souls-1/images/stat-icons/bleed_resistance.png';
import poisonResistance from '../assets/dark-souls-1/images/stat-icons/poison_resistance.png';
import curseResistance from '../assets/dark-souls-1/images/stat-icons/curse_resistance.png';

export const statIcons = {
  soulLevel,
  vitality,
  attunement,
  endurance,
  strength,
  dexterity,
  resistance,
  intelligence,
  faith,
  humanity,
  health,
  stamina,
  equipLoad,
  poise,
  itemDiscovery,
  physicalDefense,
  strikeDefense,
  slashDefense,
  thrustDefense,
  magicDefense,
  fireDefense,
  lightningDefense,
  bleedResistance,
  poisonResistance,
  curseResistance
};

export const ATTRIBUTES = [
  'vitality',
  'attunement',
  'endurance',
  'strength',
  'dexterity',
  'resistance',
  'intelligence',
  'faith'
];

export const DEFAULT_CLASS = 'warrior';
export const STARTING_CLASSES = [
  'warrior',
  'knight',
  'wanderer',
  'thief',
  'bandit',
  'hunter',
  'sorcerer',
  'pyromancer',
  'cleric',
  'deprived'
];

export const GENDERS = ['male', 'female'];

export const COVENANTS = [
  'No Covenant',
  'Blade of the Darkmoon',
  'Chaos Servant',
  'Darkwraith',
  'Forest Hunter',
  'Gravelord Servant',
  'Path of the Dragon',
  "Princess's Guard",
  'Warrior of the Sunlight',
  'Way of White'
];

export const availableTags = [
  'dlc',
  'pve',
  'pvp',
  'invasion',
  'roleplay',
  'str',
  'dex',
  'int',
  'fai',
  'pyro',
  'quality',
  'hybrid',
  'melee',
  'ranged',
  'caster'
];

export const titlePlaceholders = [
  'The Abyss Herald',
  'Prophet of the Fading Flame',
  'The Wandering Pilgrim',
  'Guardian of the Last Flame',
  'The Gravedigger of Oolacile',
  'Bearer of the Lost Covenant',
  'The Curse Forger',
  'Oracle of the Ancient City',
  'The Exile of Carim',
  'Deathshade of the Forgotten Tomb',
  'The Hermit of the Deep Ruins',
  'Bearer of the Broken Sword',
  'The Whisperer of the Damned',
  'Thief of Lost Souls',
  'Scion of the Growing Darkness'
];

export const HEALTH_VALUES = [
  400,
  415,
  433,
  451,
  471,
  490,
  511,
  531,
  552,
  573, // [01 - 10]
  594,
  616,
  638,
  659,
  682,
  698,
  719,
  742,
  767,
  793, // [11 - 20]
  821,
  849,
  878,
  908,
  938,
  970,
  1001,
  1034,
  1066,
  1100, // [21 - 30]
  1123,
  1147,
  1170,
  1193,
  1216,
  1239,
  1261,
  1283,
  1304,
  1325, // [31 - 40]
  1346,
  1366,
  1386,
  1405,
  1424,
  1442,
  1458,
  1474,
  1489,
  1500, // [41 - 50]
  1508,
  1517,
  1526,
  1535,
  1544,
  1553,
  1562,
  1571,
  1580,
  1588, // [51 - 60]
  1597,
  1606,
  1615,
  1623,
  1632,
  1641,
  1649,
  1658,
  1666,
  1675, // [61 - 70]
  1683,
  1692,
  1700,
  1709,
  1717,
  1725,
  1734,
  1742,
  1750,
  1758, // [71 - 80]
  1767,
  1775,
  1783,
  1791,
  1799,
  1807,
  1814,
  1822,
  1830,
  1837, // [81 - 90]
  1845,
  1852,
  1860,
  1867,
  1874,
  1881,
  1888,
  1894,
  1900 // [91 - 99]
];

export const STAMINA_VALUES = [
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  90,
  91, // [01 - 10]
  93,
  95,
  97,
  98,
  100,
  102,
  104,
  106,
  108,
  110, // [11 - 20]
  112,
  115,
  117,
  119,
  121,
  124,
  126,
  129,
  131,
  133, // [21 - 30]
  136,
  139,
  141,
  144,
  146,
  149,
  152,
  154,
  157,
  160 // [31 - 40]
];

import {
  ATTUNEMENT_SLOTS_THRESHOLDS,
  EQUIP_BURDEN_VALUES,
  HEALTH_VALUES,
  SOULS_TO_FIRST_LEVELS,
  STAMINA_VALUES
} from '../constants/darkSouls1';

export function calculateHealth(vitality) {
  const lastValue = HEALTH_VALUES.length - 1;
  return HEALTH_VALUES[vitality - 1] || HEALTH_VALUES[lastValue];
}

export function calculateStamina(endurance) {
  const lastValue = STAMINA_VALUES.length - 1;
  return STAMINA_VALUES[endurance - 1] || STAMINA_VALUES[lastValue];
}

export function calculateSoulLevel(soulLevelBase, basePoints, attributes) {
  const totalValues = attributes.reduce((acc, sum) => sum + acc, 0);
  const soulLevel = totalValues - basePoints + soulLevelBase;

  return soulLevel;
}

export function calculateSoulsToLevel(level) {
  if (level <= 11) {
    return SOULS_TO_FIRST_LEVELS[level - 1];
  } else {
    const soulsNeeded = 0.02 * level ** 3 + 3.06 * level ** 2 + 105.6 * level - 895;
    return Math.round(soulsNeeded);
  }
}

export function calculateTotalSoulsSpent(soulLevelBase, soulLevel) {
  let totalSouls = 0;

  for (let i = soulLevelBase; i < soulLevel; i++) {
    totalSouls += calculateSoulsToLevel(i + 1);
  }

  return totalSouls;
}

export function calculateEquipBurden(endurance) {
  const lastValue = EQUIP_BURDEN_VALUES.length - 1;
  return EQUIP_BURDEN_VALUES[endurance - 1] || EQUIP_BURDEN_VALUES[lastValue];
}

export function calculateAttunementSlots(attunement) {
  for (let i = 0; i < ATTUNEMENT_SLOTS_THRESHOLDS.length; i++) {
    if (attunement <= ATTUNEMENT_SLOTS_THRESHOLDS[i]) return i;
  }
}

export function calculatePoise(armor) {
  return armor.reduce((acc, arm) => acc + arm.poise, 0).toFixed(1);
}

export function calculateArmorDefense(armor, type, stat) {
  return armor.reduce((acc, arm) => acc + arm.defenses[type][stat], 0).toFixed(1);
}

export function calculateArmorResistance(armor, stat) {
  return armor.reduce((acc, arm) => acc + arm.resistances[stat], 0).toFixed(1);
}

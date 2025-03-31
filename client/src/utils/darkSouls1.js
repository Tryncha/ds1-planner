import { HEALTH_VALUES, STAMINA_VALUES } from '../constants/darkSouls1';

export function getHealth(vitality) {
  return HEALTH_VALUES[vitality - 1] || 1900;
}

export function getStamina(endurance) {
  return STAMINA_VALUES[endurance - 1] || 160;
}

import startingClasses from '../../starting-classes.json';

export function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function getStartingClassData(startingClassName) {
  return startingClasses.find((cls) => cls.name === startingClassName);
}

export function calculateSoulLevel(character) {
  const startingClassData = getStartingClassData(character.startingClass);

  const basePoints = startingClassData.basePoints;
  const soulLevelBase = startingClassData.soulLevelBase;
  const attributesValues = Object.values(character.attributes);

  const totalValues = attributesValues.reduce((acc, sum) => sum + acc, 0);

  return totalValues - basePoints + soulLevelBase;
}

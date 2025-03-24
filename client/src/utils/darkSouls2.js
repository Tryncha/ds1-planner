import startingClasses from '../assets/dark-souls-2/starting-classes.json';

export function getStartingClassData(startingClassName) {
  return startingClasses.find((startingClass) => startingClass.name === startingClassName);
}

export function calculateSoulLevel(character) {
  const startingClassData = getStartingClassData(character.startingClass);

  const basePoints = startingClassData.basePoints;
  const soulLevelBase = startingClassData.soulLevelBase;
  const attributesValues = Object.values(character.attributes);

  const totalValues = attributesValues.reduce((acc, sum) => sum + acc, 0);

  return totalValues - basePoints + soulLevelBase;
}

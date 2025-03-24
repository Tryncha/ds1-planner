import startingClasses from '../assets/elden-ring/starting-classes.json';

export function getStartingClassData(startingClassName) {
  return startingClasses.find((startingClass) => startingClass.name === startingClassName);
}

export function calculateRuneLevel(character) {
  const startingClassData = getStartingClassData(character.startingClass);

  const basePoints = startingClassData.basePoints;
  const runeLevelBase = startingClassData.runeLevelBase;
  const attributesValues = Object.values(character.attributes);

  const totalValues = attributesValues.reduce((acc, sum) => sum + acc, 0);

  return totalValues - basePoints + runeLevelBase;
}

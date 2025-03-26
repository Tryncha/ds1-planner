export function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function getStartingClassData(startingClasses, startingClassName) {
  return startingClasses.find((startingClass) => startingClass.name === startingClassName);
}

export function calculateSoulLevel(soulLevelBase, basePoints, attributes) {
  const totalValues = Object.values(attributes).reduce((acc, sum) => sum + acc, 0);
  const soulLevel = totalValues - basePoints + soulLevelBase;

  return soulLevel;
}

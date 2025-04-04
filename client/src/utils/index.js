export function capitalizeText(text) {
  const excludedWords = ['of', 'and', 'to', 'the'];

  return text
    .split('-')
    .map((word) => {
      const lowerCaseWord = word.toLowerCase();
      if (!excludedWords.includes(lowerCaseWord)) {
        return lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1);
      } else {
        return lowerCaseWord;
      }
    })
    .join(' ');
}

export function getStartingClassData(startingClasses, startingClassName) {
  return startingClasses.find((startingClass) => startingClass.name === startingClassName);
}

export function calculateSoulLevel(soulLevelBase, basePoints, attributes) {
  const totalValues = Object.values(attributes).reduce((acc, sum) => sum + acc, 0);
  const soulLevel = totalValues - basePoints + soulLevelBase;

  return soulLevel;
}

export function calculateRuneLevel(runeLevelBase, basePoints, attributes) {
  const totalValues = Object.values(attributes).reduce((acc, sum) => sum + acc, 0);
  const runeLevel = totalValues - basePoints + runeLevelBase;

  return runeLevel;
}

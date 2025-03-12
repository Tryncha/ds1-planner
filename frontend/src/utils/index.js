export function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function calculateSoulLevel(character) {
  const attributesValues = Object.values(character.attributes.current);
  const totalValues = attributesValues.reduce((acc, sum) => sum + acc, 0);
  return totalValues - character.basePoints + character.soulLevel.base;
}

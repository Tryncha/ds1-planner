import { useEffect, useState } from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="u-container">
      <strong>{character.name}</strong>
      <span>{character.startingClass}</span>
      <span>{character.soulLevel.current}</span>
    </div>
  );
};

const Explorer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/characters');
      const charactersData = await response.json();
      setCharacters(charactersData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default Explorer;

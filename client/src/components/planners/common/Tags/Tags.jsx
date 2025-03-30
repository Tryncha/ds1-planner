import './Tags.css';

const availableTags = ['dlc', 'str', 'dex', 'int', 'fai', 'melee', 'ranged'];

const Tags = ({ tags, toggleTag }) => {
  return (
    <div className="Tags">
      {availableTags.map((t) => (
        <div key={t} className={`Tags-tag ${tags.includes(t) ? `is-${t}Active` : ''}`} onClick={() => toggleTag(t)}>
          {t.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Tags;

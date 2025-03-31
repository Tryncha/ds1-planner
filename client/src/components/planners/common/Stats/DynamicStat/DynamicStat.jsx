import '../Stat.css';

const DynamicStat = ({ icon, stat, value, color, percentage }) => {
  return (
    <div className="IconLabelOutput">
      <div className="IconLabel">
        <img className="IconLabelOutput-icon" src={icon} />
        <label className="IconLabelOutput-label">{stat}</label>
      </div>
      <output
        className="IconLabelOutput-output"
        style={{
          background: `linear-gradient(90deg, ${color} ${percentage}%, var(--backgroundColor) ${percentage + 3}%)`
        }}>
        {value}
      </output>
    </div>
  );
};

export default DynamicStat;

import '../Stat.css';

const StaticStat = ({ icon, stat, value }) => {
  if (icon) {
    return (
      <div className="IconLabelOutput">
        <div className="IconLabel">
          <img className="IconLabelOutput-icon" src={icon} />
          <label className="IconLabelOutput-label">{stat}</label>
        </div>
        <output className="IconLabelOutput-output">{value}</output>
      </div>
    );
  }

  return (
    <div className="LabelOutput">
      <label className="LabelOutput-label">{stat}</label>
      <output className="LabelOutput-output">{value}</output>
    </div>
  );
};

export default StaticStat;

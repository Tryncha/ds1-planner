import { capitalizeText } from '../../../../../utils';
import '../Stat.css';

const StaticStat = ({ icon, stat, value }) => {
  if (icon) {
    return (
      <div className="IconLabelOutput">
        <div className="IconLabel">
          <img className="IconLabelOutput-icon" src={`/dark-souls-1/images/stat-icons/${stat}.png`} />
          <label className="IconLabelOutput-label">{capitalizeText(stat)}</label>
        </div>
        <output className="IconLabelOutput-output">{value}</output>
      </div>
    );
  }

  return (
    <div className="LabelOutput">
      <label className="LabelOutput-label">{capitalizeText(stat)}</label>
      <output className="LabelOutput-output">{value}</output>
    </div>
  );
};

export default StaticStat;

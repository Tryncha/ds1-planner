import { capitalizeText } from '../../../../../utils';
import '../Stat.css';

const DynamicStat = ({ stat, value, color, percentage }) => {
  return (
    <div className="IconLabelOutput">
      <div className="IconLabel">
        <img className="IconLabelOutput-icon" src={`/dark-souls-1/images/stat-icons/${stat}.png`} />
        <label className="IconLabelOutput-label">{capitalizeText(stat)}</label>
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

import { capitalizeWord } from '../../../../../utils';
import './EquipmentSlot.css';

const EquipmentSlot = ({ size, type, value, setEquipment, options }) => {
  function handleChange(event) {
    setEquipment(event.target.value);
  }

  return (
    <div>
      <div className={`EquipmentSlot EquipmentSlot--${size}`}>
        <select
          name=""
          id=""
          className={`EquipmentSlot-select EquipmentSlot-select--${size}`}
          value={value}
          onChange={handleChange}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt
                .split('_')
                .map((word) => capitalizeWord(word))
                .join(' ')}
            </option>
          ))}
        </select>
        <img
          className={`EquipmentSlot-img EquipmentSlot-img--${size}`}
          src={`/dark-souls-1/images/${type}/${value ? value : 'none'}.png`}
          alt={value ? value : 'none'}
        />
      </div>
    </div>
  );
};

export default EquipmentSlot;

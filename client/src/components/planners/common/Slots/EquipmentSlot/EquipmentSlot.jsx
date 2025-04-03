import { capitalizeWord } from '../../../../../utils';
import './EquipmentSlot.css';

const EquipmentSlot = ({ size, slot, type, value, setEquipment, options }) => {
  function handleChange(event) {
    setEquipment(slot, event.target.value);
  }

  return (
    <div>
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
      <div className={`EquipmentSlot EquipmentSlot--${size}`}>
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

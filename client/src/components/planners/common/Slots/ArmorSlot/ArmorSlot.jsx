import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const ArmorSlot = ({ value, setArmor, options }) => {
  return (
    <div>
      <EquipmentSlot size="md" type="armor" value={value} setEquipment={setArmor} options={options} />
      <div className="Slot-upgrade">
        <select className="Slot-upgradeSelect" name="" id=""></select>
        <select className="Slot-levelSelect" name="" id=""></select>
      </div>
    </div>
  );
};

export default ArmorSlot;

import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const ArmorSlot = ({ slot, value, setEquipment, options }) => {
  return (
    <div>
      <EquipmentSlot size="md" slot={slot} type="armor" value={value} setEquipment={setEquipment} options={options} />
      <div className="Slot-upgrade">
        <select className="Slot-upgradeSelect" name="" id=""></select>
        <select className="Slot-levelSelect" name="" id=""></select>
      </div>
    </div>
  );
};

export default ArmorSlot;

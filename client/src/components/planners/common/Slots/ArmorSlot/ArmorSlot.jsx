import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const ArmorSlot = () => {
  return (
    <div>
      <EquipmentSlot size="md" />
      <div className="Slot-upgrade">
        <select className="Slot-upgradeSelect" name="" id=""></select>
        <select className="Slot-levelSelect" name="" id=""></select>
      </div>
    </div>
  );
};

export default ArmorSlot;

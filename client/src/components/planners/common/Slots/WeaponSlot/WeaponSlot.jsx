import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const WeaponSlot = ({ value, setWeapon, options }) => {
  return (
    <div>
      <EquipmentSlot size="md" type="weapons" value={value} setEquipment={setWeapon} options={options} />
      <div className="Slot-upgrade">
        <select className="Slot-upgradeSelect" name="" id=""></select>
        <select className="Slot-levelSelect" name="" id=""></select>
      </div>
    </div>
  );
};

export default WeaponSlot;

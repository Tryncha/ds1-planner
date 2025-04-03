import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const RingSlot = ({ value, setRing, options }) => {
  return <EquipmentSlot size="sm" type="rings" value={value} setEquipment={setRing} options={options} />;
};

export default RingSlot;

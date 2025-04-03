import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const SpellSlot = ({ value, setSpell, options }) => {
  return <EquipmentSlot size="sm" type="spells" value={value} setEquipment={setSpell} options={options} />;
};

export default SpellSlot;

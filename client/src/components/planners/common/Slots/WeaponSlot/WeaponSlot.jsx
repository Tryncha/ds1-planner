import { capitalizeText } from '../../../../../utils';
import EquipmentSlot from '../EquipmentSlot/EquipmentSlot';
import '../Slots.css';

const WeaponSlot = ({
  value,
  setWeapon,
  upgrade,
  setUpgrade,
  upgradeLevel,
  setUpgradeLevel,
  options,
  upgradeOptions,
  upgradeLevelOptions
}) => {
  return (
    <div>
      <EquipmentSlot
        size="md"
        type="weapons"
        value={value}
        setEquipment={setWeapon}
        upgrade={upgrade}
        options={options}
      />
      <div className="Slot-upgrade">
        <select
          name=""
          id=""
          className="Slot-upgradeSelect"
          value={upgrade}
          onChange={(event) => setUpgrade(event.target.value)}>
          {upgradeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {capitalizeText(opt)}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          className="Slot-levelSelect"
          value={upgradeLevel}
          onChange={(event) => setUpgradeLevel(event.target.value)}>
          {upgradeLevelOptions.map((opt) => (
            <option key={opt} value={opt}>
              +{opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default WeaponSlot;

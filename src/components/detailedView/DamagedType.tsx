interface SingleSpell {
  damage?: {
    damage_type?: {
      name: string;
    };
    damage_at_slot_level?: { [key: string]: number };
  };
}

interface DamagedTypeProps {
  singleSpell: SingleSpell;
}

const DamagedType: React.FC<DamagedTypeProps> = ({ singleSpell }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="font-semibold"> Damage Type:</span>
      {singleSpell?.hasOwnProperty("damage") ? (
        <div>
          {singleSpell?.damage?.damage_type?.name}
          {singleSpell?.damage?.damage_at_slot_level &&
            Object.entries<number>(singleSpell.damage.damage_at_slot_level).map(
              ([damageSlot, damage], index) => (
                <div key={index} className="text-sm">
                  {damageSlot}: {damage}
                </div>
              )
            )}
        </div>
      ) : (
        "N/A"
      )}
    </div>
  );
};

export default DamagedType;

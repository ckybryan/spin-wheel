import React, { useState } from "react";
import "./index.css";

interface Props {
  onSelectItem?: (item: any) => any;
  items: string[];
}

const Wheel: React.FC<Props> = ({ onSelectItem, items }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [spinning, setSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(1);

  const selectItem = () => {
    setSpinning(true);
    setSpinCount((c) => c + 1);
    const item = Math.floor(Math.random() * items.length);
    if (onSelectItem) onSelectItem(selectedItem);
    setSelectedItem(item);
  };

  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": spinCount * -10 * items.length + selectedItem,
  } as any;

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${spinning ? "spinning" : ""}`}
        style={wheelVars}
        onClick={selectItem}
      >
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            //@ts-ignore
            style={{ "--item-nb": index }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;

import { Addon } from "../lib/blorbo";
import "./addons.css";

export interface AddonsProps {
  addons: Addon[];
  onChange: (addons: Addon[]) => void;
}

export function Addons(props: AddonsProps) {
  const selectAddon = (addonIx) => {
    const newAddons = props.addons.slice();
    const selectedAddon = newAddons[addonIx];
    selectedAddon.selected = !selectedAddon.selected;
    props.onChange(newAddons);
  }

  return (
    <div className="addons">
      {props.addons.map((addon, ix) => (
        <div className="addon">
          <label htmlFor={`addon-checkbox-${ix}`}>{addon.name}</label>
          <input id={`addon-checkbox-${ix}`} type="checkbox" checked={addon.selected} onChange={() => selectAddon(ix)} />
        </div>
      ))}
    </div>
  );
}

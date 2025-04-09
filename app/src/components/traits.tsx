import { ChangeEvent } from "preact/compat";
import { QuantitativeTrait } from "../lib/blorbo";
import "./traits.css";

export interface TraitsProps {
  traits: QuantitativeTrait[];
  onChange: (traits: QuantitativeTrait[]) => void;
}

export function Traits(props: TraitsProps) {
  const setCheckbox = (traitIx: number, boxIx: number) => {
    const newTraits = props.traits.slice();
    const clickedTrait = newTraits[traitIx];
    clickedTrait.amount = clickedTrait.amount === boxIx + 1 ? 0 : boxIx + 1;
    props.onChange(newTraits);
  };

  return (
    <div className="traits">
      <div>
        {props.traits.map((trait, traitIx) => (
          <div className="trait">
            <span>{trait.name}</span>
            <div className="trait-boxes">
              {Array(10)
                .fill(null)
                .map((_, boxIx) => (
                  <input
                    type="checkbox"
                    checked={boxIx < trait.amount}
                    onChange={(e) => setCheckbox(traitIx, boxIx)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <p className="faded" style="margin-left: 8px; min-width: 150px;">
        If you or a loved one is attached to a character who fills all of these
        boxes, you may be entitled to financial compensation.
      </p>
    </div>
  );
}

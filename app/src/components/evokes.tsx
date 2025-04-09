import { Evoke } from "../lib/blorbo";
import "./evoke.css";

export interface EvokesProps {
  evokes: Evoke[];
  onChange: (evokes: Evoke[]) => void;
}

export function Evokes(props: EvokesProps) {
  const selectEvoke = (evokeIx: number) => {
    const newEvokes = props.evokes.slice();
    const selectedEvoke = newEvokes[evokeIx];
    selectedEvoke.selected = !selectedEvoke.selected;
    props.onChange(newEvokes);
  };

  return (
    <div style="margin-top: 16px;">
      <h2>Evokes</h2>
      <p className="faded" style="margin-bottom: 8px;">(select all that apply)</p>
      <div>
        {props.evokes.map((evoke, ix) => (
          <div className="evoke">
            <input
              id={`evoke-checkbox-${ix}`}
              type="checkbox"
              checked={evoke.selected}
              onChange={() => selectEvoke(ix)}
            />
            <label htmlFor={`evoke-checkbox-${ix}`}>{evoke.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

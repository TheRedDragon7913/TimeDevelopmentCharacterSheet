import { Want } from "../lib/blorbo";
import "./wants.css";

export interface WantsProps {
  wants: Want[];
  onChange: (wants: Want[]) => void;
}

export function Wants(props: WantsProps) {
  const selectWant = (evokeIx: number) => {
    const newWants = props.wants.slice();
    const selectedWant = newWants[evokeIx];
    selectedWant.selected = !selectedWant.selected;
    props.onChange(newWants);
  };

  const eachColumn = Math.ceil(props.wants.length / 2);
  const columns = chunk(props.wants, eachColumn);

  return (
    <div style="margin-top: 16px;">
      <h2>You want them to have:</h2>
      <p className="faded" style="margin-bottom: 8px;">
        (select all that apply)
      </p>
      <div className="wants-columns">
        {columns.map((col, colIx) => (
          <div>
            {col.map((want, ix) => (
              <div className="want">
                <input
                  id={`want-checkbox-${colIx}-${ix}`}
                  type="checkbox"
                  checked={want.selected}
                  onChange={() => selectWant(ix)}
                />
                <label htmlFor={`want-checkbox-${ix}`}>{want.name}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunked.push(chunk);
  }
  return chunked;
}

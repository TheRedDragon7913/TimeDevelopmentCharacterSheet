import { Subclass } from "../lib/blorbo";
import "./subclasses.css";

export interface SubclassesProps {
  subclasses: Subclass[];
  onChange: (subclasses: Subclass[]) => void;
}

export function Subclasses(props: SubclassesProps) {
  const selectSubclass = (ix: number) => {
    const newSubclasses = props.subclasses.slice();
    const selectedSubclass = newSubclasses[ix];
    selectedSubclass.selected = !selectedSubclass.selected;
    props.onChange(newSubclasses);
  }

  return (
    <div className="subclasses">
      <div className="subclasses-header">
        <h2>Subclass</h2>
        <p className="faded" style="margin-left: 24px;">
          (select all that apply)
        </p>
      </div>
      <div className="subclasses-list">
        {props.subclasses.map((subclass, ix) => (
          <div
            className={`subclass ${
              subclass.selected ? "subclass-selected" : ""
            }`}
            onClick={() => selectSubclass(ix)}
          >
            {subclass.name}
          </div>
        ))}
      </div>
    </div>
  );
}

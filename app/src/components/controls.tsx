import "./controls.css";

export interface ControlsProps {
  onReset: () => void;
  onRandomize: () => void;
}

export function Controls(props: ControlsProps) {
  return (
    <div className="controls">
      <button onClick={props.onRandomize}>Randomize</button>
      <button onClick={props.onReset}>Reset</button>
      <button onClick={window.print}>Print</button>
    </div>
  );
}

import { SliderTrait } from "../lib/blorbo";
import "./sliderTraits.css";

export interface SliderTraitsProps {
  sliders: SliderTrait[];
  onChange: (sliders: SliderTrait[]) => void;
}

export function SliderTraits(props: SliderTraitsProps) {
  const moveSlider = (sliderIx: number, amount: string) => {
    if (isNaN(Number(amount))) {
      return;
    }

    const newSliders = props.sliders.slice();
    const selectedSlider = newSliders[sliderIx];
    selectedSlider.amount = Number(amount);
    props.onChange(newSliders);
  };

  return (
    <div className="sliders">
      {props.sliders.map((slider, ix) => (
        <>
          <div className="slider-left">{slider.negativePole}</div>
          <input
            className="slider-input"
            type="range"
            min="-10"
            max="10"
            value={slider.amount}
            onChange={(e) => moveSlider(ix, e.currentTarget.value)}
          />
          <div className="slider-right">{slider.positivePole}</div>
        </>
      ))}
    </div>
  );
}

export interface QuantitativeTrait {
  name: string;
  amount: number;
}

export interface CheckboxTrait {
  name: string;
  selected: boolean;
}

export interface Subclass extends CheckboxTrait {}
export interface Addon extends CheckboxTrait {}
export interface Evoke extends CheckboxTrait {}
export interface Want extends CheckboxTrait {}

export interface SliderTrait {
  negativePole: string;
  positivePole: string;
  amount: number | null;
}

export interface BlorboSettings {
  name: string;
  imageDataUrl: string | null;
  traits: QuantitativeTrait[];
  subclasses: Subclass[];
  addons: Addon[];
  sliders: SliderTrait[];
  evokes: Evoke[];
  wantThemToHave: Want[];
}

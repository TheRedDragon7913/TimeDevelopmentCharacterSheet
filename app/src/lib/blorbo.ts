export interface QuantitativeTrait {
  name: string;
  amount: number;
}

export interface CheckboxTrait {
  name: string;
  selected: boolean;
}

export interface SliderTrait {
  negativePole: string;
  positivePole: string;
  amount: number | null;
}

export interface MindsetOutset extends SliderTrait {}
export interface MindsetPresent extends SliderTrait {}
export interface MindsetEndgame extends SliderTrait {}
export interface CircumstanceOutset extends SliderTrait {}
export interface CircumstancePresent extends SliderTrait {}
export interface CircumstanceEndgame extends SliderTrait {}
export interface growthSlidersPast extends SliderTrait {}
export interface growthSlidersFuture extends SliderTrait {}


export interface BlorboSettings {
  name: string;

  mindsetOutset: MindsetOutset[];
  mindsetPresent: MindsetPresent[];
  mindsetEndgame: MindsetEndgame[];
  circumstanceOutset: CircumstanceOutset[];
  circumstancePresent: CircumstancePresent[];
  circumstanceEndgame: CircumstanceEndgame[];
  growthChangesPast: CheckboxTrait[];
  growthChangesFuture: CheckboxTrait[];
  growthSlidersPast: GrowthSlidersPast[];
  growthSlidersFuture: GrowthSlidersFuture[];
}

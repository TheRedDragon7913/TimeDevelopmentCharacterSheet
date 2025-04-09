import { BlorboSettings, CheckboxTrait } from "./blorbo";
import { GetDefaultSettings } from "./defaults";
import { GetRandomName } from "./nameRandomizer";

export const GetRandomSettings = (oldSettings: BlorboSettings): BlorboSettings => {
  const settings = GetDefaultSettings();
  settings.imageDataUrl = oldSettings.imageDataUrl;

  settings.name = GetRandomName();

  settings.traits.forEach((trait) => (trait.amount = intBetween(0, 10)));
  selectUpTo(3, settings.subclasses);
  selectUpTo(3, settings.addons);

  settings.sliders.forEach((slider) => (slider.amount = clamp(intBetween(-11, 11), -10, 10)));
  selectUpTo(4, settings.evokes);
  selectUpTo(5, settings.wantThemToHave);

  return settings;
};

export function intBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function clamp(actual: number, min: number, max: number): number {
  return actual > max ? max : actual < min ? min : actual;
}

function times(times: number, callback: () => void): void {
  for (const _ of Array(times).fill(null)) {
    callback();
  }
}

function selectUpTo(max: number, arr: CheckboxTrait[]): void {
  times(intBetween(1, max), () => {
    const randomItem = pickAnyCard(arr);
    randomItem.selected = true;
  });
}

export function pickAnyCard<T>(arr: T[]): T {
  return arr[intBetween(0, arr.length - 1)];
}

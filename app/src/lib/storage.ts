import { BlorboSettings } from "./blorbo";
import { GetDefaultSettings } from "./defaults";

export const storeSettings = (settings: BlorboSettings): void => {
  localStorage.setItem('blorbo', JSON.stringify(settings));
}

export const retrieveSettings = (): BlorboSettings => {
  try {
    const json = localStorage.getItem('blorbo');
    if (!json) {
      throw new Error();
    }

    return JSON.parse(json);
  } catch {
    return GetDefaultSettings();
  }
}

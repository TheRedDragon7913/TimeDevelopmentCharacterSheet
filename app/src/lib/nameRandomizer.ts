import { FirstNames } from "./names/firstnames"
import { LastNames } from "./names/lastnames"
import { NickNames } from "./names/nicknames"
import { Initials } from "./names/initials"
import { intBetween, pickAnyCard } from "./randomizer"

export const GetRandomName = (): string => {
  const firstname = pickAnyCard(FirstNames);
  const lastname = pickAnyCard(LastNames);

  const interpolateRx = /\[([^\]]+)\]/gi;
  const interpolatedLastname = lastname.replace(interpolateRx, (original, interpType: string) => {
    const isOptional = interpType.endsWith('?');

    if (isOptional && flipCoin()) {
      return "";
    }

    const baseType = isOptional ? interpType.slice(0, interpType.length - 1) : interpType;

    switch (baseType) {
      case 'Initial':
        return `${pickAnyCard(Initials)}.`;
      case 'Nickname':
        return pickAnyCard(NickNames);
      default:
        return original;
    }
  });

  return `${firstname} ${interpolatedLastname}`;
}

function flipCoin(): boolean {
  return !!intBetween(0, 1);
}

import { BlorboSettings } from "../lib/TimeDevelopmentCharacterSheet";
import { Addons } from "./addons";
import "./characterSheet.css";
import { Evokes } from "./evokes";
import { SliderTraits } from "./sliderTraits";
import { Subclasses } from "./subclasses";
import { Traits } from "./traits";
import { Wants } from "./wants";

export interface CharacterSheetProps {
  settings: BlorboSettings;
  onPatch: (patch: Partial<BlorboSettings>) => void;
}

export function CharacterSheet(props: CharacterSheetProps) {
  return (
    <div className="character-sheet">
      <div className="character-sheet-intro">
        This scrunkly motherfucker is:
      </div>
      <section>
        <UploadAvatar
          dataUrl={props.settings.imageDataUrl}
          onChange={(imageDataUrl) => props.onPatch({ imageDataUrl })}
        />
        <div style="margin-left: 16px;">
          <Traits
            traits={props.settings.traits}
            onChange={(traits) => props.onPatch({ traits })}
          />
          <Subclasses
            subclasses={props.settings.subclasses}
            onChange={(subclasses) => props.onPatch({ subclasses })}
          />
        </div>
      </section>
      <section style="margin-top: 6px;">
        <Addons
          addons={props.settings.addons}
          onChange={(addons) => props.onPatch({ addons })}
        />
        <SliderTraits
          sliders={props.settings.sliders}
          onChange={(sliders) => props.onPatch({ sliders })}
        />
      </section>
      <section>
        <Evokes
          evokes={props.settings.evokes}
          onChange={(evokes) => props.onPatch({ evokes })}
        />
        <Wants
          wants={props.settings.wantThemToHave}
          onChange={(wantThemToHave) => props.onPatch({ wantThemToHave })}
        />
      </section>
    </div>
  );
}

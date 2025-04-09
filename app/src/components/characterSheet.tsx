import { BlorboSettings } from "../lib/blorbo";
import "./characterSheet.css";
import { Subclasses } from "./subclasses";
import { Traits } from "./traits";
import { UploadAvatar } from "./uploadAvatar";

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
      <section></section>
      <section></section>
    </div>
  );
}

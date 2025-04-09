import { render } from "preact";

import "./style.css";
import { Header } from "./components/header";
import { useState } from "preact/hooks";
import { retrieveSettings, storeSettings } from "./lib/storage";
import { BlorboSettings } from "./lib/blorbo";
import { Controls } from "./components/controls";
import { GetRandomSettings } from "./lib/randomizer";
import { GetDefaultSettings } from "./lib/defaults";
import { CharacterSheet } from "./components/characterSheet";
import { Footer } from "./components/footer";

export function App() {
  const [settings, setSettingsInternal] = useState<BlorboSettings>(retrieveSettings());

	const setSettings = (settings: BlorboSettings): void => {
		setSettingsInternal(settings);
		storeSettings(settings);
	}

	const patchSettings = (patch: Partial<BlorboSettings>) => {
		setSettings({
			...settings,
			...patch,
		});
	};

  return (
    <div>
      <Header name={settings.name} setName={(name) => patchSettings({name})} />
      <Controls
        onRandomize={() => setSettings(GetRandomSettings(settings))}
        onReset={() => setSettings(GetDefaultSettings())}
      />
			<CharacterSheet settings={settings} onPatch={patchSettings} />
			<Footer />
    </div>
  );
}

render(<App />, document.getElementById("app"));

import preloadPackUrl from "../../static/assets/asset-pack.json"

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(400, 360, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "monospace", "fontSize": "40px" });

		// bicho_preload
		this.add.image(400, 259, "bicho-preload");

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack("asset-pack", preloadPackUrl);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Start"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

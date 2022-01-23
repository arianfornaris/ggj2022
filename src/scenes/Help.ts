
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class Help extends Phaser.Scene {

	constructor() {
		super("Help");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// ficha_espacial
		const ficha_espacial = this.add.image(0, 0, "Ficha espacial");
		ficha_espacial.setOrigin(0, 0);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.input.once("pointerdown", () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

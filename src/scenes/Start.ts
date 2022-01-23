
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class Start extends Phaser.Scene {

	constructor() {
		super("Start");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// menu_Fondo
		const menu_Fondo = this.add.image(0, 0, "Menu Fondo");
		menu_Fondo.setOrigin(0, 0);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.input.once("pointerdown", () => this.scene.start("Help"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

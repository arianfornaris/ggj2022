
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class ControllerButtonPrefab extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 344, y ?? 286, width ?? 128, height ?? 128);

		this.isFilled = true;
		this.fillAlpha = 0.2;

		/* START-USER-CTR-CODE */
		this.alpha = 0.00001;

		this.scene.events.once("scene-awake", () => this.setInteractive());

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

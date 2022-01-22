
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class FlorPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 300, y ?? 146, texture || "character", frame ?? "Flor_0.png");

		/* START-USER-CTR-CODE */
		this.play("Flor");
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class ArcadeSpritePrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 281, y ?? 183, texture || "__DEFAULT", frame);

		/* START-USER-CTR-CODE */
		this.scene.physics.add.existing(this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

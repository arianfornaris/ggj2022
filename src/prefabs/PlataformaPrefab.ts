
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";

/* START OF COMPILED CODE */

export default class PlataformaPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 315, y ?? 142, texture, frame);

		/* START-USER-CTR-CODE */

		this.body.gravity.set(0, 0);
		this.body.immovable = true;
		this.body.setMass(10000);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

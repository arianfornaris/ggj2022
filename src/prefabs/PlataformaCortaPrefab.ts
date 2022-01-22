
// You can write more code here

import PlataformaPrefab from "./PlataformaPrefab";

/* START OF COMPILED CODE */

export default class PlataformaCortaPrefab extends PlataformaPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 319, y ?? 130, texture || "plataformas", frame ?? "plataform1.png");

		/* START-USER-CTR-CODE */
		this.body.setSize(100, 30);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

import PlataformaPrefab from "./PlataformaPrefab";

/* START OF COMPILED CODE */

export default class PlataformaLargaPrefab extends PlataformaPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 358, y ?? 157, texture || "plataformas", frame ?? "plataform_2rojo.png");

		/* START-USER-CTR-CODE */

		this.body.setSize(300, 70);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

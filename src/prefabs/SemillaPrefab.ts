
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import PlayerPrefab from "./PlayerPrefab";

/* START OF COMPILED CODE */

export default class SemillaPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x, y, texture || "plataformas", frame ?? "semilla.png");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	randomOffset = 0;

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

import FlorPrefab from "~/prefabs/FlorPrefab";
import SemillaPrefab from "~/prefabs/SemillaPrefab";
import ArcadeSpritePrefab from "../prefabs/ArcadeSpritePrefab";

/* START OF COMPILED CODE */

export default class MacetaPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "plataformas", frame ?? "tierra.png");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	flor?: FlorPrefab;

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

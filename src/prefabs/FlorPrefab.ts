import SemillaPrefab from "./SemillaPrefab";


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

	semilla?: SemillaPrefab;

	addToWorld(semilla: SemillaPrefab) {

		this.semilla = semilla;
		semilla.visible = false;
		
		this.scene.add.existing(this);

		this.scene.add.tween({
			targets: this, alpha: {
				from: 0,
				to: 1
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

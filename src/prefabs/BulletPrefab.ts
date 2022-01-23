
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";

/* START OF COMPILED CODE */

export default class BulletPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 457, y ?? 288, texture || "character", frame ?? "fuego1.png");

		this.scaleX = 1;
		this.scaleY = 1;

		/* START-USER-CTR-CODE */

		this.body.setSize(undefined, 40);

		this.play("fuego");

		this.body.velocity.x = -500;

		this.scene.add.tween({
			targets: this, alpha: {
				from: 0,
				to: 1,
			}, duration: 200
		});

		this.scene.time.addEvent({
			delay: 800,
			callback: () => this.destroy()
		});

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

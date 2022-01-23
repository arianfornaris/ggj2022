import MacetaPrefab from "~/scenes/MacetaPrefab";

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class EnemyPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 311, y ?? 187, texture || "character", frame ?? "Enemigo.png");

		/* START-USER-CTR-CODE */
		this.scene.events.once("scene-awake", () => this.awakePrefab());
		/* END-USER-CTR-CODE */
	}

	public maceta: MacetaPrefab | undefined;

	/* START-USER-CODE */

	private awakePrefab() {

		if (!this.maceta) {

			return;
		}

		this.scene.add.tween({
			targets: this,  
			delay: 2000 + Math.random() * 8000,
			y: this.maceta.y - 40,
			repeat: -1,
			yoyo: true,
			duration: 6000,
			repeatDelay: 3000, 
			ease: Phaser.Math.Easing.Quadratic.Out
		});

		this.scene.add.tween({
			targets: this,  
			angle: {
				from: -20,
				to: 20
			},
			repeat: -1,
			yoyo: true,
			duration: 2000,
			ease: Phaser.Math.Easing.Quadratic.Out
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

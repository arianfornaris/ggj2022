
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import PlayerPrefab from "./PlayerPrefab";

/* START OF COMPILED CODE */

export default class SemillaPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x, y, texture || "plataformas", frame ?? "semilla.png");

		this.setOrigin(0.5, 0.7370809535381321);

		/* START-USER-CTR-CODE */

		this.scene.events.once("scene-awake", () => this.awakePrefab());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	randomOffset = 0;
	private _initX = 0;
	private _initY = 0;

	private awakePrefab() {

		this._initX = this.x;
		this._initY = this.y;
	}

	welcomeBack() {

		this.visible = true;

		this.scene.add.tween({
			targets: this,
			alpha: {
				from: 0,
				to: 1
			},
			scaleX: 1,
			scaleY: 1,
			duration: 1000,
		});

		this.scene.add.tween({
			targets: this,
			angle: {
				from: 0,
				to: 360
			},
			duration: 1000
		});

		this.scene.add.tween({
			targets: this,
			x: this._initX,
			y: this._initY,
			duration: 2 * Phaser.Math.Distance.Between(this.x, this.y, this._initX, this._initY),
			onComplete: () => {

				this.body.enable = true;
				this.body.reset(this.x, this.y);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

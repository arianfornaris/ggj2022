
// You can write more code here

import PlataformaPrefab from "./PlataformaPrefab";

/* START OF COMPILED CODE */

export default class PlataformaCortaPrefab extends PlataformaPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 319, y ?? 130, texture || "plataformas", frame ?? "plataform_1rojo.png");

		/* START-USER-CTR-CODE */
		this.body.setSize(100, 70);

		scene.events.once("scene-awake", () => {

			this._startX = this.x;
			this._leftTop = this._startX - this.moveDistance / 2;
			this._rightTop = this._startX + this.moveDistance / 2;

			this.body.velocity.x = this.moveVelocity
		});

		scene.events.on("update", () => {

			if (this.x < this._leftTop) {

				this.body.velocity.x = Math.abs(this.moveVelocity);
			}

			if (this.x > this._rightTop) {

				this.body.velocity.x = -Math.abs(this.moveVelocity);
			}
		});

		/* END-USER-CTR-CODE */
	}

	public moveDistance: number = 0;
	public moveVelocity: number = 0;

	/* START-USER-CODE */

	private _startX!: number;
	private _leftTop!: number;
	private _rightTop!: number;

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

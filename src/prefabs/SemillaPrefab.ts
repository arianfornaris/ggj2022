
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import PlayerPrefab from "./PlayerPrefab";

/* START OF COMPILED CODE */

export default class SemillaPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x, y, texture || "plataformas", frame ?? "semilla.png");

		/* START-USER-CTR-CODE */

		this.scene.events.on("update", () => this.updatePrefab());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private _player!: PlayerPrefab;

	attachToPlayer(player: PlayerPrefab) {

		this._player = player;

		this.body.enable = false;

		this.scene.add.tween({
			targets: this,
			scaleX: 0.5,
			scaleY: 0.5,
			duration: 200,
			ease: Phaser.Math.Easing.Quadratic.In
		})
	}

	private updatePrefab() {

		if (this._player) {

			this.x = this._player.x - 40;
			this.y = this._player.y + 25;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

import MacetaPrefab from "~/scenes/MacetaPrefab";
import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import FlorPrefab from "./FlorPrefab";

/* START OF COMPILED CODE */

export default class EnemyPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x, y, texture || "character", frame ?? "Enemigo.png");

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

	private _eating = false;

	eatFlor(flor: FlorPrefab) {

		if (this._eating) {

			return;
		}

		this._eating = true;

		this.scene.add.tween({
			targets: flor,
			angle: {
				from: -5,
				to: 5,
			},
			repeat: 10,
			duration: 100
		});

		this.scene.time.addEvent({
			delay: 1000,
			callback: () => {

				flor.killFlor();

				this._eating = false;
			}
		});

		try {

			this.scene.sound.play("Comeflor", {
				rate: 0.2
			});


		} catch (e) {

			console.log(e);
		}
	}

	killEnemy() {

		this.play("enemigo-die");

		this.scene.add.tween({
			targets: this,
			alpha: 0.5,
			duration: 500,
			x: "-=40",
			y: "-=40",
			onComplete: () => this.destroy()
		});

		try {

			this.scene.sound.play("fire");

		} catch (e) {

			console.log(e);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

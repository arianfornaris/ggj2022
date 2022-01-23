import MacetaPrefab from "~/scenes/MacetaPrefab";
import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import SemillaPrefab from "./SemillaPrefab";


/* START OF COMPILED CODE */

export default class FlorPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x, y, texture || "character", frame ?? "Flor_0.png");

		/* START-USER-CTR-CODE */
		this.play("Flor");
		this.body.setCircle(40, 20, 20);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	semilla!: SemillaPrefab;
	maceta!: MacetaPrefab;

	addToWorld(semilla: SemillaPrefab, maceta: MacetaPrefab) {

		this.semilla = semilla;
		this.maceta = maceta;

		semilla.visible = false;
		semilla.setPosition(this.x, this.y);

		this.scene.add.tween({
			targets: this, alpha: {
				from: 0,
				to: 1
			}
		});
	}

	killFlor() {

		this.body.enable = false;
		this.scene.add.tween({
			targets: this,
			alpha: 0,
			duration: 500,
			y: "-= 100",
			onComplete: () => {

				this.destroy();
			}
		});

		this.semilla.welcomeBack();

		delete this.maceta.flor;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

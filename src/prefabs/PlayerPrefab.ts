
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import SemillaPrefab from "./SemillaPrefab";


const PLAYER_VELOCITY_UP = -800;
const PLAYER_VELOCITY_MOVE = 200;
const WORLD_GRAVITY = 1800;

/* START OF COMPILED CODE */

export default class PlayerPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 337, y ?? 152, texture || "character", frame ?? "Conejo.png");

		/* START-USER-CTR-CODE */

		this.scene.events.once("scene-awake", () => this.awakePrefab());

		/* END-USER-CTR-CODE */
	}

	public platformsLayer: Phaser.GameObjects.Layer[] = [];
	public semillasLayers: Phaser.GameObjects.Layer[] = [];

	/* START-USER-CODE */

	private _goodBoyState = true;

	private get arcade() {

		return this.scene.physics as Phaser.Physics.Arcade.ArcadePhysics;
	}

	private awakePrefab() {

		this.initArcade();

		this.initKeyboard();

		this.initCamera();

		this.initTiming();

		this.updateCharacterTexture();
	}

	private initTiming() {

		this.scene.time.addEvent({
			repeat: -1,
			delay: 4000,
			callback: () => {

				this.swapCharacter();
			}
		});
	}

	private swapCharacter() {

		this._goodBoyState = !this._goodBoyState;

		this.updateCharacterTexture();
	}

	private updateCharacterTexture() {

		if (this._goodBoyState) {

			this.setTexture("character", "Conejo.png");

		} else {

			this.setTexture("character", "Bicho.png");
		}
	}

	private initCamera() {

		const cam = this.scene.cameras.main;

		cam.startFollow(this, undefined, 0.5, 1);
		cam.setDeadzone(200, 100);
	}

	private initArcade() {

		this.body.gravity.set(0, WORLD_GRAVITY);
		this.body.setSize(60, 100);
		this.body.checkCollision = { down: true, left: false, right: false, up: false, none: false };

		for (const layer of this.platformsLayer) {

			this.arcade.add.collider(this, layer.list);
		}

		for (const layer of this.semillasLayers) {

			this.arcade.add.overlap(this, layer.list, (player, obj) => this.playerVsSemilla(player as any, obj as any));
		}
	}

	private playerVsSemilla(player: PlayerPrefab, semilla: SemillaPrefab) {

		if (this._goodBoyState) {

			semilla.attachToPlayer(this);
		}
	}

	private initKeyboard() {

		this.scene.input.keyboard.on("keydown-UP", () => {

			if (this.body.touching.down) {

				this.body.velocity.y = PLAYER_VELOCITY_UP;
			}
		});

		const left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		const right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		this.scene.events.on("update", () => {

			if (left.isDown) {

				this.body.velocity.x = -PLAYER_VELOCITY_MOVE;

			} else if (right.isDown) {

				this.body.velocity.x = PLAYER_VELOCITY_MOVE;

			} else {

				this.body.velocity.x = 0;
			}
		});

		// this.scene.input.keyboard.on("keydown-LEFT", () => {

		// 	this.body.velocity.x = -PLAYER_VELOCITY_MOVE;
		// });

		// this.scene.input.keyboard.on("keydown-RIGHT", () => {

		// 	this.body.velocity.x = PLAYER_VELOCITY_MOVE;
		// });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

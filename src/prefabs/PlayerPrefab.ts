
// You can write more code here

import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import ControllerButtonPrefab from "./ControllerButtonPrefab";
import SemillaPrefab from "./SemillaPrefab";

const PLAYER_VELOCITY_UP = -600;
const PLAYER_VELOCITY_MOVE = 200;
const WORLD_GRAVITY = 1800;
const WORLD_BOTTOM = 1300;

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
	public controller: { leftButton: ControllerButtonPrefab, rightButton: ControllerButtonPrefab, upButton: ControllerButtonPrefab, fireButton: ControllerButtonPrefab } | undefined;

	/* START-USER-CODE */

	private _goodBoyState = true;
	private _buttonUpDown = false;
	private _jumpCount = 0;

	private debugText!: Phaser.GameObjects.Text;

	private get arcade() {

		return this.scene.physics as Phaser.Physics.Arcade.ArcadePhysics;
	}

	private awakePrefab() {

		this.initArcade();

		this.initInput();

		this.initCamera();

		this.initTiming();

		this.scene.events.on("update", () => this.updatePrefab());

		this.body.velocity.x = PLAYER_VELOCITY_MOVE;
	}

	private jump() {

		// jump!

		if (this.body.touching.down) {

			this._jumpCount = 0;
		}

		if (this._jumpCount < 3) {

			this.body.velocity.y = PLAYER_VELOCITY_UP;

			this._jumpCount++;
		}
	}

	updatePrefab() {

		if (this.y > WORLD_BOTTOM) {

			this.body.velocity.y = PLAYER_VELOCITY_UP * 2;
		}

		const pressed = new Set();

		const { activePointer, pointer1, pointer2, pointer3 } = this.scene.input;

		for (const pointer of [activePointer, pointer1, pointer2, pointer3]) {

			if (pointer.isDown) {

				const objs = this.scene.input.hitTestPointer(pointer);

				for (const obj of objs) {

					pressed.add(obj);
				}
			}
		}

		this.debugText.text = "pressed btns " + pressed.size;

		// play animation

		const charName = this._goodBoyState ? "Conejo" : "Bicho";

		if (this.x === this._lastX) {

			this.play(charName + "-Idle", true);
 
		} else if (this.body.touching.down) {

			this.play(charName + "-Walk", true);

		} else {

			this.play(charName + "-Up", true);
		}
	}

	private _lastX = 0;

	private initTiming() {

		this.scene.time.addEvent({
			delay: 1000,
			repeat: -1,
			callback: () => {

				this._lastX = this.x;
			}
		});
	}

	private swapCharacter() {

		this._goodBoyState = !this._goodBoyState;

		this.body.velocity.x = PLAYER_VELOCITY_MOVE * (this._goodBoyState ? 1 : -1);
	}

	private initCamera() {

		const cam = this.scene.cameras.main;

		cam.startFollow(this, undefined, 0.5, 1);
		cam.setDeadzone(200, 100);
	}

	private initArcade() {

		this.body.gravity.set(0, WORLD_GRAVITY);
		this.body.setSize(60, 100);

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

	private initInput() {

		this.scene.input.keyboard.on("keydown-SPACE", () => this.swapCharacter());
		this.scene.input.keyboard.on("keydown-UP", () => this.jump());

		this.debugText = this.scene.add.text(10, 10, "debug");
		this.debugText.setScrollFactor(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

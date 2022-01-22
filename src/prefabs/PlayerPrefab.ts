
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
	public controller: { changeButton: ControllerButtonPrefab, upButton: ControllerButtonPrefab, fireButton: ControllerButtonPrefab } | undefined;

	/* START-USER-CODE */

	private _goodBoyState = true;
	private _jumpCount = 0;
	private _semillas: SemillaPrefab[] = [];

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

	private get characterName() {

		return this._goodBoyState ? "Conejo" : "Bicho";
	}

	private jump() {

		// jump!

		if (this.body.touching.down) {

			this._jumpCount = 0;

			this.play(this.characterName + "-Up", true);
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

		if (this.body.touching.down) {

			this.play(this.characterName + "-Walk", true);

		} else {

			if (this.body.velocity.y > 0) {

				this.play(this.characterName + "-Down", true);
			}
		}

		this.updateSemillas();
	}

	private updateSemillas() {

		for (let i = 0; i < this._semillas.length; i++) {

			const semilla = this._semillas[i];

			semilla.x = this.x - 40 + i + semilla.randomOffset;
			semilla.y = this.y + 25 - i * semilla.height * 0.2;
		}
	}

	private initTiming() {

		//TODO
	}

	private changeCharacter() {

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

			this.attachToPlayer(semilla);
		}
	}

	private attachToPlayer(semilla: SemillaPrefab) {

		semilla.randomOffset = Phaser.Math.Between(0, 5);
		this._semillas.push(semilla);

		semilla.body.enable = false;

		this.scene.add.tween({
			targets: semilla,
			scaleX: 0.5,
			scaleY: 0.5,
			duration: 200,
			ease: Phaser.Math.Easing.Quadratic.In
		});
	}

	private initInput() {

		this.scene.input.keyboard.on("keydown-SPACE", () => this.changeCharacter());
		this.scene.input.keyboard.on("keydown-UP", () => this.jump());
		this.scene.input.keyboard.on("keydown-ENTER", () => this.doAction());

		this.controller?.upButton.on("pointerdown", () => this.jump());
		this.controller?.changeButton.on("pointerdown", () => this.changeCharacter());

		this.debugText = this.scene.add.text(10, 10, "debug");
		this.debugText.setScrollFactor(0, 0);
	}

	private doAction() {

		if (this._goodBoyState) {

			this.plant();
		}
	}

	private plant() {

		alert("plant");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

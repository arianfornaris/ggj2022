
// You can write more code here

import MacetaPrefab from "~/scenes/MacetaPrefab";
import ArcadeSpritePrefab from "./ArcadeSpritePrefab";
import BulletPrefab from "./BulletPrefab";
import ControllerButtonPrefab from "./ControllerButtonPrefab";
import FlorPrefab from "./FlorPrefab";
import SemillaPrefab from "./SemillaPrefab";

const PLAYER_VELOCITY_UP = -600;
const PLAYER_VELOCITY_MOVE = 200;
const WORLD_GRAVITY = 1800;
const WORLD_BOTTOM = 1300;

/* START OF COMPILED CODE */

export default class PlayerPrefab extends ArcadeSpritePrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 337, y ?? 152, texture || "character", frame ?? "Bicho-Idle_1.png");

		/* START-USER-CTR-CODE */

		this.scene.events.once("scene-awake", () => this.awakePrefab());

		/* END-USER-CTR-CODE */
	}

	public platformsLayer: Phaser.GameObjects.Layer[] = [];
	public semillasLayers: Phaser.GameObjects.Layer[] = [];
	public controller: {changeButton: ControllerButtonPrefab, upButton: ControllerButtonPrefab, fireButton: ControllerButtonPrefab, realFireButton: Phaser.GameObjects.Image} | undefined;
	public macetasLayers: Phaser.GameObjects.Layer[] = [];
	public floresLayers: Phaser.GameObjects.Layer[] = [];
	public bulletLayer: Phaser.GameObjects.Layer | undefined;

	/* START-USER-CODE */

	private _goodBoyState = true;
	private _jumpCount = 0;
	private _semillas: SemillaPrefab[] = [];
	private _currentMaceta?: MacetaPrefab;

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

		// play animation

		if (this.body.touching.down) {

			this.play(this.characterName + "-Walk", true);

		} else {

			if (this.body.velocity.y > 0) {

				this.play(this.characterName + "-Down", true);
			}
		}

		this.updateSemillas();

		this.updateMacetas();

		this.updateFlores();

		this.checkBoundaries();
	}

	private checkBoundaries() {

		if (this.x < 300) {

			this.x = 300;
		}

		if (this.x > 3650) {

			this.x = 3650;
		}
	}

	private updateMacetas() {

		this._currentMaceta = undefined;

		for (const layer of this.macetasLayers) {

			this.arcade.overlap(this, layer.list, (player, obj) => {

				this._currentMaceta = obj as MacetaPrefab;
			});
		}
	}

	private updateSemillas() {

		const falling = this.anims.currentAnim && this.anims.currentAnim.key.indexOf("Down") > 0;

		for (let i = 0; i < this._semillas.length; i++) {

			const semilla = this._semillas[i];

			semilla.x = this.x - 40 + i + semilla.randomOffset;
			semilla.y = this.y + 25 - i * semilla.height * 0.2 - (falling ? 30 : 0);
		}
	}

	private initTiming() {

		//TODO
	}

	private changeCharacter() {

		this._goodBoyState = !this._goodBoyState;

		this.body.velocity.x = PLAYER_VELOCITY_MOVE * (this._goodBoyState ? 1 : -1);

		this.scene.add.tween({
			targets: this,
			alpha: 0.8,
			yoyo: true,
			duration: 100,
			ease: Phaser.Math.Easing.Elastic.InOut
		});

		this.controller?.realFireButton.setFrame(this._goodBoyState? "siembra.png" : "disparo.png");
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

			this.arcade.add.overlap(this, layer.list, (player, obj) => this.playerVsSemilla(
				obj as any));
		}
	}

	private updateFlores() {

		for (const layer of this.floresLayers) {

			this.arcade.overlap(this, layer.list, (player, obj) => this.playerVsFlor(
				obj as any));
		}
	}

	private playerVsFlor(flor: FlorPrefab) {

		if (!this._goodBoyState) {

			flor.killFlor();
		}
	}

	private playerVsSemilla(semilla: SemillaPrefab) {

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
			duration: 300,
			ease: Phaser.Math.Easing.Quadratic.Out
		});
	}

	private initInput() {

		this.scene.input.keyboard.on("keydown-SPACE", () => this.changeCharacter());
		this.scene.input.keyboard.on("keydown-UP", () => this.jump());
		this.scene.input.keyboard.on("keydown-ENTER", () => this.doAction());
		this.scene.input.keyboard.on("keydown-DOWN", () => this.doAction());

		this.controller?.upButton.on("pointerdown", () => this.jump());
		this.controller?.changeButton.on("pointerdown", () => this.changeCharacter());
		this.controller?.fireButton.on("pointerdown", () => this.doAction());
	}

	private doAction() {

		if (this._goodBoyState) {

			this.plant();

		} else {

			this.fire();
		}
	}

	private _lastFire = 0;

	private fire() {

		if (this.scene.time.now - this._lastFire < 200) {

			return;
		}

		this._lastFire = this.scene.time.now;

		const bullet = new BulletPrefab(this.scene, this.x - 30, this.y + 20);

		bullet.addToDisplayList(this.bulletLayer);
	}

	private plant() {

		if (this._currentMaceta && !this._currentMaceta.flor) {

			const semilla = this._semillas.pop();

			if (semilla) {

				const flor = new FlorPrefab(this.scene, this._currentMaceta.x, this._currentMaceta.y - 10);

				flor.addToDisplayList(this.floresLayers[0]);

				flor.addToWorld(semilla, this._currentMaceta);

				this._currentMaceta.flor = flor;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

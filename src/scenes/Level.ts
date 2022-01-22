
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Parallax from "../components/Parallax";
import PlataformaLargaPrefab from "../prefabs/PlataformaLargaPrefab";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import SemillaPrefab from "../prefabs/SemillaPrefab";
import ControllerButtonPrefab from "../prefabs/ControllerButtonPrefab";

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fondo
		const fondo = this.add.image(0, 0, "Fondo");
		fondo.setOrigin(0, 0);

		// bola
		const bola = this.add.image(400, 1444, "Bola");
		bola.setOrigin(0.5, 1);

		// lunasLayer
		const lunasLayer = this.add.layer();

		// luna_amarilla_png
		const luna_amarilla_png = this.add.image(83, 58, "plataformas", "Luna_amarilla.png");
		lunasLayer.add(luna_amarilla_png);

		// luna_Grande_png
		const luna_Grande_png = this.add.image(403, 167, "plataformas", "Luna_Grande.png");
		lunasLayer.add(luna_Grande_png);

		// luna_Morada_png
		const luna_Morada_png = this.add.image(721, 105, "plataformas", "Luna_Morada.png");
		lunasLayer.add(luna_Morada_png);

		// plataformasLayer
		const plataformasLayer = this.add.layer();

		// plataformaLargaPrefab
		const plataformaLargaPrefab = new PlataformaLargaPrefab(this, 445, 285.9, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab);

		// plataformaLargaPrefab_1
		const plataformaLargaPrefab_1 = new PlataformaLargaPrefab(this, 785, 321, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_1);

		// plataformaLargaPrefab_2
		const plataformaLargaPrefab_2 = new PlataformaLargaPrefab(this, 1125, 285.9, "plataformas", "plataform_2rojo.png");
		plataformasLayer.add(plataformaLargaPrefab_2);

		// plataformaLargaPrefab_3
		const plataformaLargaPrefab_3 = new PlataformaLargaPrefab(this, 1465, 242, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_3);

		// plataformaLargaPrefab_4
		const plataformaLargaPrefab_4 = new PlataformaLargaPrefab(this, 1805, 285.9, "plataformas", "plataform_2rojo.png");
		plataformasLayer.add(plataformaLargaPrefab_4);

		// plataformaLargaPrefab_5
		const plataformaLargaPrefab_5 = new PlataformaLargaPrefab(this, 2145, 302, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_5);

		// plataformaLargaPrefab_6
		const plataformaLargaPrefab_6 = new PlataformaLargaPrefab(this, 2485, 268, "plataformas", "plataform_2rojo.png");
		plataformasLayer.add(plataformaLargaPrefab_6);

		// plataformaLargaPrefab_7
		const plataformaLargaPrefab_7 = new PlataformaLargaPrefab(this, 2825, 291, "plataformas", "plataform_2rojo.png");
		plataformasLayer.add(plataformaLargaPrefab_7);

		// plataformaLargaPrefab_8
		const plataformaLargaPrefab_8 = new PlataformaLargaPrefab(this, 3165, 253, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_8);

		// plataformaLargaPrefab_9
		const plataformaLargaPrefab_9 = new PlataformaLargaPrefab(this, 3505, 285.9, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_9);

		// charactersLayer
		const charactersLayer = this.add.layer();

		// player
		const player = new PlayerPrefab(this, 410, 101, "character", "Bicho.png");
		charactersLayer.add(player);

		// semillasLayers
		const semillasLayers = this.add.layer();

		// semilla_png
		const semilla_png = new SemillaPrefab(this, 1678, 48);
		semillasLayers.add(semilla_png);

		// semilla_png_1
		const semilla_png_1 = new SemillaPrefab(this, 1491, -42);
		semillasLayers.add(semilla_png_1);

		// semilla_png_2
		const semilla_png_2 = new SemillaPrefab(this, 1275, -38);
		semillasLayers.add(semilla_png_2);

		// semilla_png_3
		const semilla_png_3 = new SemillaPrefab(this, 959, -37);
		semillasLayers.add(semilla_png_3);

		// semilla_png_1_1
		const semilla_png_1_1 = new SemillaPrefab(this, 2398, 87);
		semillasLayers.add(semilla_png_1_1);

		// semilla_png_1_2
		const semilla_png_1_2 = new SemillaPrefab(this, 2597, -62);
		semillasLayers.add(semilla_png_1_2);

		// semilla_png_1_3
		const semilla_png_1_3 = new SemillaPrefab(this, 2865, 44);
		semillasLayers.add(semilla_png_1_3);

		// macetasLayer
		const macetasLayer = this.add.layer();

		// tierra_png_3
		const tierra_png_3 = this.add.image(523, 260, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_3);

		// tierra_png_2
		const tierra_png_2 = this.add.image(1170, 261, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_2);

		// tierra_png_1
		const tierra_png_1 = this.add.image(-676, 118, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_1);

		// tierra_png
		const tierra_png = this.add.image(-347, 517, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png);

		// tierra_png_4
		const tierra_png_4 = this.add.image(1093, 506, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_4);

		// tierra_png_2_1
		const tierra_png_2_1 = this.add.image(1843, 261, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_2_1);

		// tierra_png_2_2
		const tierra_png_2_2 = this.add.image(2098, 276, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_2_2);

		// tierra_png_2_3
		const tierra_png_2_3 = this.add.image(2896, 257, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_2_3);

		// flor6
		const flor6 = this.add.image(1187, 188, "flor6");
		macetasLayer.add(flor6);

		// flor6_1
		const flor6_1 = this.add.image(2110, 205, "flor6");
		macetasLayer.add(flor6_1);

		// controllerLayer
		const controllerLayer = this.add.layer();

		// action_png
		const action_png = this.add.image(723, 321, "ui", "action.png");
		controllerLayer.add(action_png);

		// left_png
		const left_png = this.add.image(78, 513, "ui", "left.png");
		controllerLayer.add(left_png);

		// up_png
		const up_png = this.add.image(605, 513, "ui", "up.png");
		controllerLayer.add(up_png);

		// right_png
		const right_png = this.add.image(208, 513, "ui", "right.png");
		controllerLayer.add(right_png);

		// leftButton
		const leftButton = new ControllerButtonPrefab(this, 68, 543);
		controllerLayer.add(leftButton);

		// upButton
		const upButton = new ControllerButtonPrefab(this, 661, 514, 278, 157);
		controllerLayer.add(upButton);

		// rightButton
		const rightButton = new ControllerButtonPrefab(this, 214, 538);
		controllerLayer.add(rightButton);

		// fireButton
		const fireButton = new ControllerButtonPrefab(this, 723, 320);
		controllerLayer.add(fireButton);

		// fondo (components)
		const fondoParallax = new Parallax(fondo);
		fondoParallax.factor = 0;

		// bola (components)
		const bolaParallax = new Parallax(bola);
		bolaParallax.factor = 0.15;

		// luna_amarilla_png (components)
		const luna_amarilla_pngParallax = new Parallax(luna_amarilla_png);
		luna_amarilla_pngParallax.factor = 0.05;

		// luna_Grande_png (components)
		new Parallax(luna_Grande_png);

		// luna_Morada_png (components)
		const luna_Morada_pngParallax = new Parallax(luna_Morada_png);
		luna_Morada_pngParallax.factor = 0.04;

		// player (prefab fields)
		player.platformsLayer = [plataformasLayer];
		player.semillasLayers = [semillasLayers];
		player.controller = {leftButton, rightButton, upButton, fireButton};

		// action_png (components)
		const action_pngParallax = new Parallax(action_png);
		action_pngParallax.factor = 0;

		// left_png (components)
		const left_pngParallax = new Parallax(left_png);
		left_pngParallax.factor = 0;

		// up_png (components)
		const up_pngParallax = new Parallax(up_png);
		up_pngParallax.factor = 0;

		// right_png (components)
		const right_pngParallax = new Parallax(right_png);
		right_pngParallax.factor = 0;

		// leftButton (components)
		const leftButtonParallax = new Parallax(leftButton);
		leftButtonParallax.factor = 0;

		// upButton (components)
		const upButtonParallax = new Parallax(upButton);
		upButtonParallax.factor = 0;

		// rightButton (components)
		const rightButtonParallax = new Parallax(rightButton);
		rightButtonParallax.factor = 0;

		// fireButton (components)
		const fireButtonParallax = new Parallax(fireButton);
		fireButtonParallax.factor = 0;

		this.player = player;

		this.events.emit("scene-awake");
	}

	private player!: PlayerPrefab;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {

		this.player.updatePrefab();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

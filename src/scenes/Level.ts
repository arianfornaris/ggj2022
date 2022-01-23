
import FlorPrefab from "~/prefabs/FlorPrefab";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Parallax from "../components/Parallax";
import PlataformaLargaPrefab from "../prefabs/PlataformaLargaPrefab";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import SemillaPrefab from "../prefabs/SemillaPrefab";
import MacetaPrefab from "./MacetaPrefab";
import ControllerButtonPrefab from "../prefabs/ControllerButtonPrefab";
import EnemyPrefab from "../prefabs/EnemyPrefab";

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
		const plataformaLargaPrefab = new PlataformaLargaPrefab(this, 445, 224, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab);

		// plataformaLargaPrefab_1
		const plataformaLargaPrefab_1 = new PlataformaLargaPrefab(this, 785, 257, "plataformas", "plataform_2piel.png");
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
		const player = new PlayerPrefab(this, 446, 35, "character", "Bicho.png");
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

		// maceta3
		const maceta3 = new MacetaPrefab(this, 1146, 260, "plataformas", "tierra.png");
		macetasLayer.add(maceta3);

		// maceta5
		const maceta5 = new MacetaPrefab(this, 2113, 269, "plataformas", "tierra.png");
		macetasLayer.add(maceta5);

		// maceta1
		const maceta1 = new MacetaPrefab(this, 389, 194, "plataformas", "tierra.png");
		macetasLayer.add(maceta1);

		// maceta2
		const maceta2 = new MacetaPrefab(this, 784, 231, "plataformas", "tierra.png");
		macetasLayer.add(maceta2);

		// maceta4
		const maceta4 = new MacetaPrefab(this, 1839, 260, "plataformas", "tierra.png");
		macetasLayer.add(maceta4);

		// maceta6
		const maceta6 = new MacetaPrefab(this, 2762, 266, "plataformas", "tierra.png");
		macetasLayer.add(maceta6);

		// maceta7
		const maceta7 = new MacetaPrefab(this, 3449, 254, "plataformas", "tierra.png");
		macetasLayer.add(maceta7);

		// floresLayer
		const floresLayer = this.add.layer();

		// controllerLayer
		const controllerLayer = this.add.layer();

		// upButton
		const upButton = new ControllerButtonPrefab(this, 632, 380, 162, 220);
		upButton.setOrigin(0, 0);
		controllerLayer.add(upButton);

		// changeButton
		const changeButton = new ControllerButtonPrefab(this, 116, 513, 254, 194);
		controllerLayer.add(changeButton);

		// fireButton
		const fireButton = new ControllerButtonPrefab(this, 420, 380, 187, 220);
		fireButton.setOrigin(0, 0);
		controllerLayer.add(fireButton);

		// cambio_png
		const cambio_png = this.add.image(136, 522, "ui", "Cambio.png");
		controllerLayer.add(cambio_png);

		// siembra_png
		const siembra_png = this.add.image(538, 522, "ui", "siembra.png");
		controllerLayer.add(siembra_png);

		// saltar_png
		const saltar_png = this.add.image(710, 522, "ui", "saltar.png");
		controllerLayer.add(saltar_png);

		// enemyLayer
		const enemyLayer = this.add.layer();

		// enemyPrefab1
		const enemyPrefab1 = new EnemyPrefab(this, 386, -299);
		enemyLayer.add(enemyPrefab1);

		// enemyPrefab2
		const enemyPrefab2 = new EnemyPrefab(this, 779, -302);
		enemyLayer.add(enemyPrefab2);

		// enemyPrefab3
		const enemyPrefab3 = new EnemyPrefab(this, 1138, -182);
		enemyLayer.add(enemyPrefab3);

		// enemyPrefab4
		const enemyPrefab4 = new EnemyPrefab(this, 1835, -212);
		enemyLayer.add(enemyPrefab4);

		// enemyPrefab5
		const enemyPrefab5 = new EnemyPrefab(this, 2122, -187);
		enemyLayer.add(enemyPrefab5);

		// enemyPrefab6
		const enemyPrefab6 = new EnemyPrefab(this, 2750, -187);
		enemyLayer.add(enemyPrefab6);

		// enemyPrefab7
		const enemyPrefab7 = new EnemyPrefab(this, 3442, -154);
		enemyLayer.add(enemyPrefab7);

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
		player.controller = { changeButton, upButton, fireButton };
		player.macetasLayers = [macetasLayer];
		player.floresLayers = [floresLayer];

		// upButton (components)
		const upButtonParallax = new Parallax(upButton);
		upButtonParallax.factor = 0;

		// changeButton (components)
		const changeButtonParallax = new Parallax(changeButton);
		changeButtonParallax.factor = 0;

		// fireButton (components)
		const fireButtonParallax = new Parallax(fireButton);
		fireButtonParallax.factor = 0;

		// cambio_png (components)
		const cambio_pngParallax = new Parallax(cambio_png);
		cambio_pngParallax.factor = 0;

		// siembra_png (components)
		const siembra_pngParallax = new Parallax(siembra_png);
		siembra_pngParallax.factor = 0;

		// saltar_png (components)
		const saltar_pngParallax = new Parallax(saltar_png);
		saltar_pngParallax.factor = 0;

		// enemyPrefab1 (prefab fields)
		enemyPrefab1.maceta = maceta1;

		// enemyPrefab2 (prefab fields)
		enemyPrefab2.maceta = maceta2;

		// enemyPrefab3 (prefab fields)
		enemyPrefab3.maceta = maceta3;

		// enemyPrefab4 (prefab fields)
		enemyPrefab4.maceta = maceta4;

		// enemyPrefab5 (prefab fields)
		enemyPrefab5.maceta = maceta5;

		// enemyPrefab6 (prefab fields)
		enemyPrefab6.maceta = maceta6;

		// enemyPrefab7 (prefab fields)
		enemyPrefab7.maceta = maceta7;

		this.player = player;
		this.floresLayer = floresLayer;
		this.enemyLayer = enemyLayer;

		this.events.emit("scene-awake");
	}

	private player!: PlayerPrefab;
	private floresLayer!: Phaser.GameObjects.Layer;
	private enemyLayer!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {

		this.player.updatePrefab();

		const arcade = this.physics as Phaser.Physics.Arcade.ArcadePhysics;

		arcade.overlap(this.enemyLayer.list, this.floresLayer.list, (enemy, obj) => {

			(enemy as EnemyPrefab).eatFlor(obj as any);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Parallax from "../components/Parallax";
import PlataformaLargaPrefab from "../prefabs/PlataformaLargaPrefab";
import PlataformaCortaPrefab from "../prefabs/PlataformaCortaPrefab";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import SemillaPrefab from "../prefabs/SemillaPrefab";

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
		const bola = this.add.image(400, 626, "Bola");
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
		const plataformaLargaPrefab = new PlataformaLargaPrefab(this, 445, 251, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab);

		// plataformaCortaPrefab
		const plataformaCortaPrefab = new PlataformaCortaPrefab(this, 226, 251);
		plataformasLayer.add(plataformaCortaPrefab);

		// plataformaCortaPrefab_1
		const plataformaCortaPrefab_1 = new PlataformaCortaPrefab(this, 675.3177522831313, 151.06518015163007, "plataformas", "plataform_1piel.png");
		plataformasLayer.add(plataformaCortaPrefab_1);

		// plataformaCortaPrefab_2
		const plataformaCortaPrefab_2 = new PlataformaCortaPrefab(this, 720.6626282258102, 4.361169748845714);
		plataformasLayer.add(plataformaCortaPrefab_2);

		// plataformaCortaPrefab_3
		const plataformaCortaPrefab_3 = new PlataformaCortaPrefab(this, 109.84047582148979, 167.069254013752, "plataformas", "plataform_1piel.png");
		plataformasLayer.add(plataformaCortaPrefab_3);

		// plataformaCortaPrefab_4
		const plataformaCortaPrefab_4 = new PlataformaCortaPrefab(this, -43.198225868668544, 147.3978345079431);
		plataformasLayer.add(plataformaCortaPrefab_4);

		// plataformaLargaPrefab_1
		const plataformaLargaPrefab_1 = new PlataformaLargaPrefab(this, -311.60013588105437, 145.7304888642561, "plataformas", "plataform_2piel.png");
		plataformasLayer.add(plataformaLargaPrefab_1);

		// plataformaLargaPrefab_2
		const plataformaLargaPrefab_2 = new PlataformaLargaPrefab(this, -124.88594082296518, 401.795670658207);
		plataformasLayer.add(plataformaLargaPrefab_2);

		// plataformaLargaPrefab_3
		const plataformaLargaPrefab_3 = new PlataformaLargaPrefab(this, 886.0380581344034, 396.460979370833);
		plataformasLayer.add(plataformaLargaPrefab_3);

		// charactersLayer
		const charactersLayer = this.add.layer();

		// playerPrefab
		const playerPrefab = new PlayerPrefab(this, 410, 101, "character", "Bicho.png");
		charactersLayer.add(playerPrefab);

		// semillasLayers
		const semillasLayers = this.add.layer();

		// semilla_png
		const semilla_png = new SemillaPrefab(this, 248, 48);
		semillasLayers.add(semilla_png);

		// semilla_png_1
		const semilla_png_1 = new SemillaPrefab(this, 61.510868072509766, -42.15974426269531);
		semillasLayers.add(semilla_png_1);

		// semilla_png_2
		const semilla_png_2 = new SemillaPrefab(this, -150.985595703125, -44.815948486328125);
		semillasLayers.add(semilla_png_2);

		// semilla_png_3
		const semilla_png_3 = new SemillaPrefab(this, -336.9200134277344, -82.0028305053711);
		semillasLayers.add(semilla_png_3);

		// macetasLayer
		const macetasLayer = this.add.layer();

		// tierra_png_3
		const tierra_png_3 = this.add.image(523, 218, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_3);

		// tierra_png_2
		const tierra_png_2 = this.add.image(357, 219, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_2);

		// tierra_png_1
		const tierra_png_1 = this.add.image(-43, 114, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png_1);

		// tierra_png
		const tierra_png = this.add.image(-170, 372, "plataformas", "tierra.png");
		macetasLayer.add(tierra_png);

		// plataform_1rojo_png
		this.add.image(223, 951, "plataformas", "plataform_1rojo.png");

		// plataform_1piel_png
		this.add.image(594, 856, "plataformas", "plataform_1piel.png");

		// plataform_1rojo_png_1
		this.add.image(-157, 1020, "plataformas", "plataform_1rojo.png");

		// plataform_1rojo_png_2
		this.add.image(787, 1284, "plataformas", "plataform_1rojo.png");

		// plataform_1piel_png_1
		this.add.image(76, 1397, "plataformas", "plataform_1piel.png");

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

		// playerPrefab (prefab fields)
		playerPrefab.platformsLayer = [plataformasLayer];
		playerPrefab.semillasLayers = [semillasLayers];

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

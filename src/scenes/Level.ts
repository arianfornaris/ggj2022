
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Parallax from "../components/Parallax";
import PlataformaLargaPrefab from "../prefabs/PlataformaLargaPrefab";
import PlataformaCortaPrefab from "../prefabs/PlataformaCortaPrefab";
import PlayerPrefab from "../prefabs/PlayerPrefab";

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);

		// plataformasLayer
		const plataformasLayer = this.add.layer();

		// plataformaLargaPrefab
		const plataformaLargaPrefab = new PlataformaLargaPrefab(this, 445, 251);
		plataformasLayer.add(plataformaLargaPrefab);

		// plataformaCortaPrefab
		const plataformaCortaPrefab = new PlataformaCortaPrefab(this, 226, 251);
		plataformasLayer.add(plataformaCortaPrefab);

		// plataformaCortaPrefab_1
		const plataformaCortaPrefab_1 = new PlataformaCortaPrefab(this, 675.3177522831313, 151.06518015163007);
		plataformasLayer.add(plataformaCortaPrefab_1);

		// plataformaCortaPrefab_2
		const plataformaCortaPrefab_2 = new PlataformaCortaPrefab(this, 720.6626282258102, 4.361169748845714);
		plataformasLayer.add(plataformaCortaPrefab_2);

		// plataformaCortaPrefab_3
		const plataformaCortaPrefab_3 = new PlataformaCortaPrefab(this, 109.84047582148979, 167.069254013752);
		plataformasLayer.add(plataformaCortaPrefab_3);

		// plataformaCortaPrefab_4
		const plataformaCortaPrefab_4 = new PlataformaCortaPrefab(this, -42.198225868668544, 148.3978345079431);
		plataformasLayer.add(plataformaCortaPrefab_4);

		// plataformaLargaPrefab_1
		const plataformaLargaPrefab_1 = new PlataformaLargaPrefab(this, -311.60013588105437, 145.7304888642561);
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

		// background (components)
		new Parallax(background);

		// playerPrefab (prefab fields)
		playerPrefab.platformsLayer = [plataformasLayer];

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

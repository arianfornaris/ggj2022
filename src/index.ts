import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");
	}

	preload() {

		this.load.pack("pack", preloadPackUrl);
	}

	create() {

		this.scene.start("Preload");
	}
}

window.addEventListener('load', function () {

	const game = new Phaser.Game({
		width: 800,
		height: 600,
		backgroundColor: "#1D113D",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false
			}
		},
		input: {
			"activePointers": 3
		},
		scene: [Boot, Preload, Level]
	});

	game.scene.start("Boot");

	this.document.addEventListener("pointerdown", () => {

		game.scale.startFullscreen();
	});

});
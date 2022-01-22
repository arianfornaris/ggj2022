
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";

export default class Parallax extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__Parallax"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): Parallax {
		return (gameObject as any)["__Parallax"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public factor: number = 0.1;

	/* START-USER-CODE */

	protected awake(): void {

		(this.gameObject as Phaser.GameObjects.Image).setScrollFactor(this.factor, this.factor);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

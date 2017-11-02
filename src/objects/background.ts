namespace App {
  export class Background extends Phaser.TileSprite {
    
    constructor(game: Phaser.Game) {
      super(game, 0, 0, game.stage.width, game.stage.height, "background");

      game.add.existing(this);
    }

    update() {
    }

  }
}

namespace App {
  export class Logo extends Phaser.Sprite {
    
    constructor(game: Phaser.Game, x: number, y: number) {
      super(game, x, y, "logo");

      this.anchor.set(0.5);
      
      game.add.existing(this);
    }

    update() {
    }

  }
}

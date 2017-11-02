namespace App {

  export class PreloaderState extends Phaser.State {
  
    preload() {

      this.game.load.image("background", "dist/sprites/background.png");
      this.game.load.image("logo", "dist/sprites/logo.png");

    }

    create() {
      this.game.state.start("Game");
    }
  }

}

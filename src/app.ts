namespace App {
  export class PhaserGame extends Phaser.Game {

    constructor() {
      super(800, 600, Phaser.AUTO, "", null);

      this.state.add("Boot", BootState);
      this.state.add("Preloader", PreloaderState);
      this.state.add("Game", GameState);

      this.state.start("Boot");
    }
    
  }
}

window.onload = () => {
  var game = new App.PhaserGame();
};

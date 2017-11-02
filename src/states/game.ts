namespace App {

  export class GameState extends Phaser.State {

    background : Background;
    logo : Logo;

    preload() {}

    create() {
      
      this.background = new Background(this.game);
      this.logo = new Logo(this.game, this.game.world.centerX, this.game.world.centerY);

    }

    update() {
    }
    
  }

}

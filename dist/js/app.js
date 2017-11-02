'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var PhaserGame = (function (_super) {
        __extends(PhaserGame, _super);
        function PhaserGame() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, "", null) || this;
            _this.state.add("Boot", App.BootState);
            _this.state.add("Preloader", App.PreloaderState);
            _this.state.add("Game", App.GameState);
            _this.state.start("Boot");
            return _this;
        }
        return PhaserGame;
    }(Phaser.Game));
    App.PhaserGame = PhaserGame;
})(App || (App = {}));
window.onload = function () {
    var game = new App.PhaserGame();
};
var App;
(function (App) {
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background(game) {
            var _this = _super.call(this, game, 0, 0, game.stage.width, game.stage.height, "background") || this;
            game.add.existing(_this);
            return _this;
        }
        Background.prototype.update = function () {
        };
        return Background;
    }(Phaser.TileSprite));
    App.Background = Background;
})(App || (App = {}));
var App;
(function (App) {
    var Logo = (function (_super) {
        __extends(Logo, _super);
        function Logo(game, x, y) {
            var _this = _super.call(this, game, x, y, "logo") || this;
            _this.anchor.set(0.5);
            game.add.existing(_this);
            return _this;
        }
        Logo.prototype.update = function () {
        };
        return Logo;
    }(Phaser.Sprite));
    App.Logo = Logo;
})(App || (App = {}));
var App;
(function (App) {
    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BootState.prototype.preload = function () { };
        BootState.prototype.create = function () {
            this.input.maxPointers = 1;
            if (this.game.device.desktop) {
            }
            this.game.state.start("Preloader", true, false);
        };
        return BootState;
    }(Phaser.State));
    App.BootState = BootState;
})(App || (App = {}));
var App;
(function (App) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.preload = function () { };
        GameState.prototype.create = function () {
            this.background = new App.Background(this.game);
            this.logo = new App.Logo(this.game, this.game.world.centerX, this.game.world.centerY);
        };
        GameState.prototype.update = function () {
        };
        return GameState;
    }(Phaser.State));
    App.GameState = GameState;
})(App || (App = {}));
var App;
(function (App) {
    var PreloaderState = (function (_super) {
        __extends(PreloaderState, _super);
        function PreloaderState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreloaderState.prototype.preload = function () {
            this.game.load.image("background", "dist/sprites/background.png");
            this.game.load.image("logo", "dist/sprites/logo.png");
        };
        PreloaderState.prototype.create = function () {
            this.game.state.start("Game");
        };
        return PreloaderState;
    }(Phaser.State));
    App.PreloaderState = PreloaderState;
})(App || (App = {}));
Array.prototype.shuffle = function () {
    var inputArray = this;
    var counter = inputArray.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = inputArray[counter];
        inputArray[counter] = inputArray[index];
        inputArray[index] = temp;
    }
    return inputArray;
};
//# sourceMappingURL=app.js.map
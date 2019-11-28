"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var seed_1 = __importDefault(require("./seed"));
var result_1 = __importDefault(require("./result"));
var Game = /** @class */ (function () {
    // cells 
    function Game(player, clear) {
        this.moves = 0;
        this.player = seed_1["default"][player];
        this.com = seed_1["default"]['o'];
        this.clear = clear;
    }
    Game.prototype.playGame = function (tile) {
        // check if move is legal
        this.legalMove(tile, this.player) ? this.comPlay() : 1;
    };
    Game.prototype.countMove = function (h) {
        this.moves++;
        this.checkResult(this.moves, h);
    };
    Game.prototype.checkResult = function (moves, hand) {
        if (moves > 4) {
            new result_1["default"](hand);
        }
    };
    Game.prototype.comPlay = function () {
        // check if it has been played
        var tiles = document.querySelectorAll('div.tile.null');
        var rand = Math.floor(Math.random() * tiles.length);
        if (this.moves < 8)
            this.legalMove(tiles[rand], this.com);
    };
    Game.prototype.legalMove = function (t, hand) {
        if (t.innerHTML !== "") {
            alert("already played try again");
            return false;
        }
        else {
            t.innerHTML = "" + hand;
            t.classList.replace('null', "" + hand);
            this.countMove(hand);
            return true;
        }
    };
    Game.prototype.stopGame = function () {
        // this.clear;
        console.log("stopped");
    };
    return Game;
}());
exports["default"] = Game;

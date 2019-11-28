"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var main_1 = __importDefault(require("./main"));
var tiles = document.querySelectorAll('div.tile');
var hand = new main_1["default"]('x');
function _init_() {
    // add event listener
    tiles.forEach(function (tile, key) {
        tile.addEventListener('click', function (e) {
            e.preventDefault();
            // check if game should play
            hand.playGame(tile);
        });
    });
}
_init_();

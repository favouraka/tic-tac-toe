(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./main":2}],2:[function(require,module,exports){
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

},{"./result":3,"./seed":4}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Result = /** @class */ (function () {
    function Result(hand, stopper) {
        // win sets
        this.win = [
            [0, 4, 8],
            [0, 3, 6],
            [0, 1, 2],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6]
        ];
        this.plays = [];
        this.hand = hand;
        this.stopGame = stopper;
        this.player = document.querySelectorAll("." + hand);
        this.show();
    }
    Result.prototype.show = function () {
        var _this = this;
        this.player.forEach(function (element) {
            _this.plays.push(Number(element.id));
        });
        this.findWin();
    };
    Result.prototype.findWin = function () {
        var _this = this;
        //wins
        this.win.forEach(function (w) {
            // matches
            var match = 0;
            // loop played tiles 
            _this.plays.forEach(function (p) {
                w.forEach(function (m) {
                    // loop through win sets to check for matches
                    if (m === p) {
                        match++;
                    }
                });
            });
            // if we have three matches in a set we then declare a winner 
            if (match > 2) {
                var tiles = document.querySelectorAll('div.tile');
                tiles.forEach(function (t) {
                    t.innerHTML = "";
                });
                alert(_this.hand + " wins");
                window.location.reload();
            }
        });
    };
    return Result;
}());
exports["default"] = Result;

},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Seed;
(function (Seed) {
    Seed["x"] = "x";
    Seed["o"] = "o";
})(Seed || (Seed = {}));
exports["default"] = Seed;

},{}]},{},[1]);

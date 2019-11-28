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

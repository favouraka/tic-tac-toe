import Game from './main';

var tiles = document.querySelectorAll('div.tile')

var hand = new Game('x');

function _init_():void{
    // add event listener
    tiles.forEach((tile, key) => {
        tile.addEventListener<any>('click',function(e){
            e.preventDefault();
            // check if game should play
            hand.playGame(tile)
        })
    });
}

_init_()

import Seed from './seed';
import Result from './result';

class Game {
    protected player:any
    protected com:any
    moves:number = 0
    clear:void
    // cells 

    constructor(player:any, clear:void){
        this.player = Seed[player]
        this.com = Seed['o']
        this.clear = clear
    }

    playGame(tile:Element){        
        // check if move is legal
        
        this.legalMove(tile,this.player) ? this.comPlay() : 1;        
    }

    protected countMove(h:string){
        this.moves++;
        this.checkResult(this.moves,h);          
    }

    checkResult(moves:number,hand:string){
        if (moves > 4){ 
            new Result(hand)                      
        }
    }

    comPlay():any{        
        // check if it has been played
        var tiles = document.querySelectorAll('div.tile.null')
        var rand = Math.floor(Math.random() * tiles.length)
        if(this.moves < 8)
        this.legalMove(tiles[rand],this.com);
    }

    protected legalMove(t:Element,hand:string){
        if (t.innerHTML !== ""){
            alert(`already played try again`);
            return false;
        }else {
            t.innerHTML = `${hand}`;
            t.classList.replace('null',`${hand}`);
            this.countMove(hand);
            return true;
        }      

    }

    stopGame(){
        // this.clear;
        console.log(`stopped`);
        
    }
}

export default Game
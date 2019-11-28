class Result{
    player:NodeListOf<Element>
    hand:string

    // win sets
    win:number[][] = [
        [0,4,8],
        [0,3,6],
        [0,1,2],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ]
    stopGame:void

    plays:number[] = []

    constructor(hand:string,stopper:void){
        this.hand = hand
        this.stopGame = stopper
        this.player = document.querySelectorAll<any>(`.${hand}`);
        this.show();
    }

    show(){           
        this.player.forEach((element: { id: any; }) => {
            this.plays.push(Number(element.id));            
        });
        this.findWin()
    }

    protected findWin(){
        //wins
        this.win.forEach( w => {
            // matches
            var match:number = 0
            // loop played tiles 
            this.plays.forEach( p => {
                w.forEach(m => {
                    // loop through win sets to check for matches
                    if(m === p){
                        match++                                       
                    }                    
                })
            })
            // if we have three matches in a set we then declare a winner 
            if(match > 2){
                var tiles = document.querySelectorAll('div.tile')
                tiles.forEach(t=>{
                    t.innerHTML = ``
                })
                alert(`${this.hand} wins`)
                window.location.reload()
            }
        })
    }

    
}

export default Result;
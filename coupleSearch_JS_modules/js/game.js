'use strict'

import {Board}  from "./board.js";
import {Counters} from "./counters.js";
import {Options}  from "./options.js";


export class Game {

    constructor (user) {
        
        this.user = user;
        
        this.options = new Options(this);
        this.createNewGame();
        

    }

    addAttempt(){
        this.counters.attempts++;
        this.counters.refresh();
    }

    substractCouple(){
        this.counters.couples--;
        this.counters.refresh();
    }

    createNewGame(){
        let rowsCols = this.options.getValues();

        if(rowsCols[0] !== undefined && rowsCols[1] !== undefined ){
            if(this.board !== undefined){
                this.board.html.innerHTML = "";
            }

            this.board = new Board(rowsCols[0], rowsCols[1], this);
            
            this.counters = new Counters(this.board);
            this.counters.refresh();
        }
    }
}

let game = new Game();
'use strict'

export class Counters{

    constructor (board, started = 0) {

        this.couplesHTML = document.getElementById("couples");
        this.attemptsHTML = document.getElementById("attempts");
        this.couples = board.rows * board.cols / 2;
        this.attempts = started;


    }

    refresh(){
        this.couplesHTML.innerHTML = this.couples;
        this.attemptsHTML.innerHTML = this.attempts;
    }

}
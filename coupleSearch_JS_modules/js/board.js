'use strict';

import {Button} from "./button.js";

export class Board {

    constructor (rows, cols, game) {
        this.game = game;
        this.html = document.getElementById ("board");
        this.html.style.border = "2px red solid"
        this.rows = rows;
        this.cols = cols;
        this.buttonPressed = null;
        this.buttons = this.createButtons (this.rows, this.cols);
        this.printButtons (this.html, this.buttons);
        this.buttonAction (this.rows, this.cols);


    }

    createButtons (rows, cols) {

        let buttons = [];

        for (let j = 0; j < 2; j++) {
            for (let i = 1; i < (rows * cols / 2) + 1; i++) {
                buttons.push (new Button (rows, cols, i));

            }
        }

        buttons.sort (() => {
            return Math.random () - 0.5;
        });


        return buttons;

    }

    printButtons (board, buttons) {
        buttons.forEach (button => {
            board.appendChild (button.html);
        });
    }

    buttonAction (rows, cols) {
        for (let i = 0; i < (rows * cols); i++) {

            this.buttons[i].html.addEventListener ("click", () => {
                this.buttons[i].show ();
                this.compareButtons (this.buttons[i]);
            });
        }
    }

    compareButtons (button) {

        if (this.buttonPressed !== null) {

            this.blockButtons();

            if (this.buttonPressed.value === button.value) { //Pair case.

                this.buttonPressed = null;
                this.addAttempt();
                this.deductCouple();
                this.unblockButton();

            } else { //No pair case.
                setTimeout (() => {

                    button.hide ();
                    this.buttonPressed.hide ();
                    this.buttonPressed = null;
                    this.unblockButton();
                    this.addAttempt();

                }, 300);
            }
        } else { //If null, buttonPressed gets value of the last button pressed.
            this.buttonPressed = button;
        }

    }

    blockButtons(){
        this.buttons.forEach(button =>{
            if(button.html.style.backgroundColor === "black"){
                button.html.disabled = true;
            }
        });
    }

    unblockButton() {
        this.buttons.forEach (button => {
            if (button.html.style.backgroundColor === "black") {
                button.html.disabled = false;
            }
        });

    }

    addAttempt(){
        this.game.addAttempt();
    }

    deductCouple(){
        this.game.substractCouple();
    }

}
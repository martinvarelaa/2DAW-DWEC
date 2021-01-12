'use strict'

export class Button {

    constructor (rows = 3, columns = 4, value) {


        this.html = document.createElement("button");
        this.value = value;

        this.html.style.width = (100 / (rows*columns) * rows).toString() + "%";
        this.html.style.height = (100 / (rows*columns) * columns).toString() + "%";

        this.html.style.border = "2px solid red";
        this.html.style.backgroundColor = "black";
        

    }

    show(){
        
        this.html.style.backgroundColor = "white";
        this.html.innerHTML = this.value.toString();
        this.html.disabled = true;

    }

    hide(){
        
        this.html.style.backgroundColor = "black";
        this.html.innerHTML = "";
        this.html.disabled = false;
    }

}
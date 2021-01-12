
export class Options{

    constructor (game) {

    this.game = game;

    this.easyMode = document.getElementById("easy");
    this.mediumMode = document.getElementById("medium");
    this.hardMode = document.getElementById("hard");
    this.customMode = document.getElementById("custom");

    this.rowsInput = document.getElementById("rowsInput");
    this.colsInput = document.getElementById("colsInput");
    this.submitInput = document.getElementById("submit");

    this.defaultOptions();

    this.addListeners(this.easyMode, 3, 4);

    this.addListeners(this.mediumMode, 5,4);

    this.addListeners(this.hardMode, 6,6);

    this.addListeners(this.customMode, 0,0);

    this.addListeners(this.submitInput, null, null);

}

    addListeners(selector, value1, value2){
        if (selector === this.submitInput){
            selector.addEventListener("click", ()=>{

                this.game.createNewGame();

            });

        }else{
            selector.addEventListener("click", ()=>{
                if(value1 === 0 && value2 === 0){
                    this.rowsInput.disabled = false;
                    this.colsInput.disabled = false;
                }else{
                    this.rowsInput.disabled = true;
                    this.colsInput.disabled = true;
                }
                this.rowsInput.value = value1;
                this.colsInput.value = value2;
            });
        }
    }

    getValues(){

        let rows = this.rowsInput.value;
        let columns = this.colsInput.value;
        
        if (rows > 0 && columns > 0 && rows*columns%2 === 0){
            return [rows, columns]
        }else{
            alert("Selecciona los valores correctamente!");
            return [undefined, undefined];
        }
    }
    
    defaultOptions () {
        this.easyMode.checked = true;
        this.rowsInput.disabled = true;
        this.colsInput.disabled = true;
        this.colsInput.value = 4;
        this.rowsInput.value = 3;
    }


}

'use strict';

let rows = 3;
let columns = 4;
let buttons = [rows];
let firstValue = 0;
let secondValue = 0;
let pairs = rows * columns / 2;
let firstButtonPressed = null;
let width = 100 / (rows * columns) * rows;
let height = 100 / (rows * columns) * columns;
let attempts = 0;
const warnings = document.getElementById ("warnings");


newGame ();


function newGame () {
    createBoard ();
    printBoard ();

    let {rowsInput, colsInput} = setFixedValues ();

    document.getElementById ("easy").addEventListener ("click", () => {
        prepareEasyGame (rowsInput, colsInput);
    });
    document.getElementById ("medium").addEventListener ("click", () => {
        prepareMediumGame (rowsInput, colsInput);
    });
    document.getElementById ("hard").addEventListener ("click", () => {
        prepareHardGame (rowsInput, colsInput);
    });
    document.getElementById ("custom").addEventListener ("click", () => {
        prepareCustomGame (rowsInput, colsInput);
    });

    document.getElementById ("newGame").addEventListener ("click", () => {
        restartVariables ();
        if (document.getElementById ("custom").checked === true  ) {
            if ((rowsInput.value * colsInput.value) % 2 !== 0) {
                alert ("Seleccione dos valores cuya multiplicación sea divisble entre 2!");

            } else if (+rowsInput.value <= 1 || +colsInput.value <= 1) {
                alert ("Seleccione dos valores mayores o iguales a 1!");
            } else {

                rows = rowsInput.value;
                columns = colsInput.value;
                console.log (rowsInput.value, colsInput.value);


            }
        }

        setVariableValues ();
        createBoard ();
        printBoard ();
        warnings.innerHTML = "";
    });


}

function checkEnd () {
    if (pairs === 0) {
        alert ("Has encontrado todas las parejas!");
    }
}

function refresh () {
    document.getElementById ("couples").innerHTML = pairs.toString ();
    document.getElementById ("attempts").innerHTML = attempts.toString ();

}

function generateButtonValues () {
    let values = [];
    for (let i = 0; i < (rows * columns) / 2; i) {
        const number = Math.floor (Math.random () * (rows * columns) / 2 + 1);
        if (!values.includes (number)) {
            values.push (number);
            i++;
        }
    }
    return values.concat (values);
}

function compareValues (element) {

    
    element.target.style.background = "white";
    element.target.disabled = true;

    if (firstValue === 0) {
        element.target.disabled = true;
        firstValue = element.target.innerHTML;
        firstButtonPressed = element.target;
        quitValues();
        element.target.innerHTML = firstValue;

    } else if (secondValue === 0) {
        element.target.disabled = true;
        secondValue = element.target.innerHTML;
        element.target.style.background = "white";
        




        if (firstValue === secondValue) {

            warnings.innerHTML = "Pair!";


            pairs--;
            attempts++;
            firstValue = 0;
            secondValue = 0;
            quitValues();
            refresh ();
            checkEnd ();
        } else {

            warnings.innerHTML = "Sorry, try again!";


            let allButtons = document.getElementsByTagName ("button");
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].disabled = true;
            }
            
            setTimeout (() => {

                element.target.style.background = "black";
                firstButtonPressed.style.background = "black";
                element.target.innerHTML = "";
                firstButtonPressed.innerHTML = "";
                for (let i = 0; i < allButtons.length; i++) {
                    if (allButtons[i].style.backgroundColor !== "white"){
                        allButtons[i].disabled = false;
                    }
                }
                
            }, 300);
            attempts++;
            firstValue = 0;
            secondValue = 0;
            

            quitValues();

            refresh ();
            firstButtonPressed.disabled = false;
            element.target.disabled = false;
        }
    }
}

function createBoard () {
    document.getElementById ("board").innerHTML = "";
    const values = generateButtonValues ();
    values.sort (() => {
        return Math.random () - 0.5;
    });
    for (let i = 0; i < rows; i++) {
        buttons[i] = new Array (columns);
        for (let j = 0; j < columns; j++) {
            buttons[i][j] = document.createElement ("button");
            buttons[i][j].style.color = "black";
            buttons[i][j].style.border = "3px solid red";
            buttons[i][j].style.width = `${width}%`;
            buttons[i][j].style.height = `${height}%`;
            buttons[i][j].style.backgroundColor = "black";

            buttons[i][j].addEventListener("click", element => {//Cada vez que hacemos click en un elemento
                
                giveValue(values);
                
                compareValues (element);



            });
        }
    }
}

function printBoard () {

    buttons.forEach (element => {
        element.forEach (element1 => {
            document.getElementById ("board").appendChild (element1);
        });
    });
    refresh ();
}

function setVariableValues () {
    width = 100 / (rows * columns) * rows;
    height = 100 / (rows * columns) * columns;
    pairs = rows * columns / 2;
    buttons = [rows];
}

function prepareEasyGame (rowsInput, colsInput) {
    rowsInput.disabled = true;
    colsInput.disabled = true;
    rowsInput.value = "3";
    colsInput.value = "4";
    rows = 3;
    columns = 4;
}

function prepareMediumGame (rowsInput, colsInput) {
    rowsInput.value = "5";
    colsInput.value = "4";
    rowsInput.disabled = true;
    colsInput.disabled = true;
    rows = 5;
    columns = 4;
}

function prepareHardGame (rowsInput, colsInput) {
    rowsInput.value = "6";
    colsInput.value = "6";
    rowsInput.disabled = true;
    colsInput.disabled = true;
    rows = 6;
    columns = 6;
}

function setFixedValues () {
    document.getElementById ("easy").checked = true;
    let rowsInput = document.getElementById ("rowsInput");
    let colsInput = document.getElementById ("colsInput");
    rowsInput.value = 3;
    colsInput.value = 4;
    rows = 3;
    columns = 4;
    rowsInput.disabled = true;
    colsInput.disabled = true;
    return {rowsInput, colsInput};
}

function prepareCustomGame (rowsInput, colsInput) {
    rowsInput.disabled = false;
    colsInput.disabled = false;
    rowsInput.value = "";
    colsInput.value = "";
}

function restartVariables () {
    attempts = 0;
    firstButtonPressed = null;
    firstValue = 0;
    secondValue = 0;
}

function giveValue(values){

    let myButtons = document.getElementsByTagName("button");
    let k = 0;
    for(let i = 0; i < rows*columns; i++){

           myButtons.item(i).innerHTML = values[k];
    
            k++;

    }

}

function quitValues(){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(buttons[i][j].style.backgroundColor !== "white"){
                    buttons[i][j].innerHTML = "";
            }
        }
    }
}







const btn = document.querySelector(".change");
let color = document.querySelector(".color");
let code = document.querySelector(".HEX");

let HEX = [0, 1 , 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.addEventListener("DOMContentLoaded", changeColor)
btn.addEventListener("click", changeColor)

function changeColor(){

    let hexcolor = "#" 

    for (var i = 0; i < 6; i++){

        hexcolor += HEX[Math.floor(Math.random() * HEX.length)];


    } 

    document.body.style.backgroundColor = hexcolor

    code.textContent = hexcolor;
    

}

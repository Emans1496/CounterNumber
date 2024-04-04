let numerobase = document.getElementById("display");
let add = document.getElementById("add");
let dec = document.getElementById("dec");
let res = document.getElementById("res");
let cn = document.getElementById("counterName");
let chn = document.getElementById("changeNameButton");
let setStarter = document.getElementById("setStart");

add.onclick = function add() {
    numerobase.innerHTML = parseInt(numerobase.innerHTML) + 1;
}

dec.onclick = function decrase() {
    numerobase.innerHTML = parseInt(numerobase.innerHTML) - 1;
}

res.onclick = function reset() {
    numerobase.innerHTML = parseInt(0);
}

chn.onclick = function () {
    newName = prompt("Enter the name to give to the counter: ");
    if (!isNaN(parseInt(newName)) || newName.trim() === "") {
        alert ("You must enter a string");
    } else {
    cn.innerHTML = newName;
    }
}


setStarter.onclick = function () {
    newNumber = prompt("Enter the number from which to start counting");
    if (typeof Number(newNumber) !== "number" || isNaN(newNumber)) {
        alert("You must enter a number");
    } else {
        numerobase.innerHTML = newNumber;
    }
}

var counterElement = document.getElementById('countertext');

var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var clearBtn = document.getElementById('clear');

var counter = counterElement.innerText;

function increment() {
    counter++;
    console.log(counter);
    counterElement.innerText = counter;

    if(counter >= 0){
        error.innerHTML = " ";
    }
}

function decrement() {
    counter--;
    console.log(counter);
    counterElement.innerText = counter;

    if(counter < 0) {
        counter = 0;
        counterElement.innerText = counter;
        console.log('Error : Cannot go below 0');
        error.innerHTML = "<span style = 'color : darkred;'>Error : Cannot go below 0</span>"   
    }

    else if(counter >= 0){
        error.innerHTML = " ";
    }
}

function clear() {
    counter = 0;
    console.log(counter);
    counterElement.innerText = counter;

    if(counter >= 0){
        error.innerHTML = " ";
    }
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
clearBtn.onclick = clear;

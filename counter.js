
let count = 0;
const countElement = document.getElementById("counter");
const incrementbutton = document.getElementById("increment");

function increaseCount(){
    count= count+1;
    countElement.innerText = count;
}
incrementbutton.addEventListener('click', increaseCount);
const decrementbutton = document.getElementById("decrement");

function decreaseCount(){
    count= count-1;
    countElement.innerText = count;
}
decrementbutton.addEventListener('click', decreaseCount);
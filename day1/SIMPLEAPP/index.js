let countElement = document.getElementById("count");
// console.log(aVar);
let btn =  document.getElementById("increment-btn");
//btn.addEventListener(onclick, increment());
let count = 0;
function increment() {
    count++;
    countElement.textContent = count;
}
const valueEl = document.querySelector('#value');
const decBtn = document.querySelector('button[data-action="decrement"]');
const inBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decBtn.addEventListener('click', function () { 
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

inBtn.addEventListener("click", function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
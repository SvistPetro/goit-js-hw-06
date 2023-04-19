const inputEl = {
  input: document.querySelector("#font-size-control"),
};
const spanEl = document.querySelector("#text");

inputEl.input.addEventListener("input", controlValue);

function controlValue(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
};


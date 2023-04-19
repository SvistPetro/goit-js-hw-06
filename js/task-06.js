const inputEl = {
    input: document.querySelector("#validation-input"),
};

inputEl.input.addEventListener("blur", inputValidation);

function inputValidation(event) { 
    if (event.currentTarget.value.length === Number(inputEl.input.getAttribute('data-length'))) {
        inputEl.input.classList.add("valid");
        inputEl.input.classList.remove("invalid");
    } else { 
        inputEl.input.classList.add("invalid");
        inputEl.input.classList.remove("valid");
    };
};
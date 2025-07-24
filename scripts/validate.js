function enableValidation() {
  const formList = document.querySelectorAll("form");
  formList.forEach(function (form) {
    const inputList = form.querySelectorAll("input");
    setEventListeners(form, inputList);
  });
}
//input.validationMessage;- se genera el mensaje
//input.validity.valid;-que el imput sea valido

function setEventListeners(form, inputList) {
  const buttonElement = form.querySelector(".popup__button_disabled");
  console.log(buttonElement);
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      showInputError(input);
    });
  });
}

function validateButton(buttonElement, inputList) {}
// mostrar un mensaje de error
function showInputError(input) {
    console.log(input);
  const spanElement = document.querySelector(`#${input.id}-error`);
  console.log(spanElement);
  spanElement.textContent = input.validationMessage;
}

enableValidation();

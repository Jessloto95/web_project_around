export default class FormValidator {
  constructor(settings) {
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
  }

  //Validacion de formulario
  enableValidation() {
    const formList = document.querySelectorAll(this.formSelector);
    //listado de formularios
    formList.forEach((form) => {
      const inputList = Array.from(form.querySelectorAll("input"));
      this._setEventListeners(form, inputList);
    });
  }
  //Agrega los eventos validar los evenos
  _setEventListeners(form, inputList) {
    const buttonElement = form.querySelector(this.submitButtonSelector);
    this._validateButton(buttonElement, inputList);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._showInputError(input);
        this._validateButton(buttonElement, inputList);
      });
    });
  }

  _showInputError(input) {
    const spanElement = document.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      spanElement.textContent = input.validationMessage;
    } else {
      spanElement.textContent = "";
    }
  }

  _validateButton(buttonElement, inputList) {
    if (this._checkInputsValidity(inputList)) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
    }
  }
  _checkInputsValidity(inputList) {
    return inputList.some((input) => !input.validity.valid);
  }
}

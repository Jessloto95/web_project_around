export default class FormValidator {
  constructor(form, settings) {
    this.form = form;
    this.settings = settings;
  }

  enableValidation() {
    this.inputList = Array.from(
      this.form.querySelectorAll(this.settings.inputSelector)
    );
    this._setEventListeners();
  }
  //Agrega los eventos
  _setEventListeners() {
    this.buttonElement = this.form.querySelector(
      this.settings.submitButtonSelector
    );
    this.form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._showInputError(input);
        this._validateButton();
      });
    });
  }

  _showInputError(input) {
    const spanElement = document.querySelector(`#${input.id}-error`);
    spanElement.textContent = input.validationMessage;
  }

  _validateButton() {
    if (this._checkInputsValidity(this.inputList)) {
      this.buttonElement.classList.add("popup__button_disabled");
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove("popup__button_disabled");
      this.buttonElement.disabled = false;
    }
  }
  _checkInputsValidity(inputList) {
    return this.inputList.some(function (input) {
      return !input.validity.valid;
    });
  }
}

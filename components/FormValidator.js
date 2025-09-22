export default class FormValidator {
  constructor(settings) {
    this.formSelector = settings.formSelector; // Selector CSS para los formularios
    this.inputSelector = settings.inputSelector; // Selector CSS para los campos de entrad
    this.submitButtonSelector = settings.submitButtonSelector; // Selector CSS para el botón de envío
  }

  //Validacion de formulario
  enableValidation() {
    const formList = document.querySelectorAll(this.formSelector); // Selecciona todos los formularios que coinciden con el selector
    //listado de formularios
    formList.forEach((form) => {
      const inputList = Array.from(form.querySelectorAll("input")); // Convierte la NodeList de inputs a un array
      this._setEventListeners(form, inputList); // Configura los escuchadores de eventos para cada formulario
    });
  }
  //Agrega los eventos validar los evenos
  _setEventListeners(form, inputList) {
    const buttonElement = form.querySelector(this.submitButtonSelector); // Selecciona el botón de envío del formulario
    this._validateButton(buttonElement, inputList); // Valida el estado inicial del botón de envío

    form.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Previene el comportamiento por defecto del envío del formulario
    });

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._showInputError(input); // Muestra u oculta el mensaje de error del input
        this._validateButton(buttonElement, inputList); // Valida el estado del botón de envío después de cada entrada
      });
    });
  }

  _showInputError(input) {
    const spanElement = document.querySelector(`#${input.id}-error`); // Selecciona el elemento span de error asociado al input
    if (!input.validity.valid) {
      spanElement.textContent = input.validationMessage; // Muestra el mensaje de validación del navegador si el input es inválido
    } else {
      spanElement.textContent = ""; // Borra el mensaje de error si el input es válido
    }
  }

  _validateButton(buttonElement, inputList) {
    if (this._checkInputsValidity(inputList)) {
      buttonElement.disabled = true; // Deshabilita el botón si algún input es inválido
    } else {
      buttonElement.disabled = false; // Habilita el botón si todos los inputs son válidos
    }
  }
  _checkInputsValidity(inputList) {
    return inputList.some((input) => !input.validity.valid); // Retorna true si al menos un input es inválido
  }
}

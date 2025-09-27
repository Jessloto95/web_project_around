import Popup from "./Popup.js"; // Importa la clase base Popup

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, callback) {
    super(popupSelector); // Llama al constructor de la clase padre (Popup)
    this._handleFormSubmit = callback; // Guarda la función de callback que se ejecutará al enviar el formulario
    this.formElement = this.popupElement.querySelector(formSelector); // Selecciona el elemento del formulario dentro del popup
    this._submitButton = this.formElement.querySelector(".popup__button_save");
    this._originalButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const data = {};
    const inputList = this.formElement.querySelectorAll(".popup__input"); // Selecciona todos los inputs con la clase 'popup__input' dentro del formulario
    inputList.forEach((input) => {
      // Itera sobre cada input
      data[input.name] = input.value; // Guarda el valor del input usando su atributo 'name' como clave
    });
    return data; // Devuelve el objeto con los valores de los inputs
  } // Este método se encarga de recopilar los valores de todos los campos de entrada del formulario.

  setLoadingState(isLoading, loadingText = "Guardando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._originalButtonText;
      this._submitButton.disabled = false;
    }
  }

  setEventListeners() {
    super.setEventListeners(); // Llama al método setEventListeners de la clase padre para configurar los eventos de cerrar
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Previene el comportamiento por defecto del envío del formulario
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close(); // Llama al método close de la clase padre para ocultar el popup
    this.formElement.reset(); // Restablece el formulario a su estado inicial (borra los valores de los inputs)
    this.setEventListeners(false);
  }
}

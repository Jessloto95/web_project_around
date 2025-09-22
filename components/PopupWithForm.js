import Popup from "./Popup.js"; // Importa la clase base Popup

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, callback) {
    super(popupSelector); // Llama al constructor de la clase padre (Popup)
    this._handleFormSubmit = callback; // Guarda la función de callback que se ejecutará al enviar el formulario
    this.formElement = this.popupElement.querySelector(formSelector); // Selecciona el elemento del formulario dentro del popup
  }

  _getInputValues() {
    const data = {}; // Objeto para almacenar los valores de los inputs
    const inputList = this.formElement.querySelectorAll(".popup__input"); // Selecciona todos los inputs con la clase 'popup__input' dentro del formulario
    inputList.forEach((input) => {
      // Itera sobre cada input
      data[input.name] = input.value; // Guarda el valor del input usando su atributo 'name' como clave
    });
    return data; // Devuelve el objeto con los valores de los inputs
  } // Este método se encarga de recopilar los valores de todos los campos de entrada del formulario.

  setEventListeners() {
    super.setEventListeners(); // Llama al método setEventListeners de la clase padre para configurar los eventos de cerrar
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Previene el comportamiento por defecto del envío del formulario
      this._handleFormSubmit(this._getInputValues()); // Ejecuta la función de callback con los valores de los inputs
      //Estoy pasando a handleFormSubmit un *objeto* que obtengo de getInputValue
      super.close(); // Cierra el popup después de enviar el formulario
    });
  }

  close() {
    super.close(); // Llama al método close de la clase padre para ocultar el popup
    this.formElement.reset(); // Restablece el formulario a su estado inicial (borra los valores de los inputs)
  }
}

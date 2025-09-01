import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, callback) {
    super(popupSelector);
    this._handleFormSubmit = callback; //Llamar a la funcion del formulario que se esta creando
    this.formElement = this.popupElement.querySelector(formSelector);
  }

  _getInputValues() {
    const data = {};
    const inputList = this.formElement.querySelectorAll(".popup__input"); // Seleccionamos todos los input de los formularios
    inputList.forEach((input) => {
      //Hace una lista de inputs y guardamos el valor en el id del input
      data[input.name] = input.value;
    });
    return data;
  } //Se encarga de dar como resultado un objeto con todos los valores de todos los inputs

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      //Estoy pasando a handleFormSubmit un *objeto* que obtengo de getInputValue
      super.close();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}

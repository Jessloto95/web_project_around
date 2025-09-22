import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector); // Llama al constructor de la clase padre (Popup)

    this.popupElement = document.querySelector(popupSelector); // Selecciona el elemento del popup del DOM
    this._title = this.popupElement.querySelector(".popup__image-title"); // Selecciona el elemento para el título de la imagen
    this._link = this.popupElement.querySelector(".popup__image"); // Selecciona el elemento de la imagen
  }
  open(title, link) {
    super.open(); // Llama al método open de la clase padre para mostrar el popup
    this._title.textContent = title; // Establece el texto del título de la imagen
    this._link.src = link; // Establece la fuente de la imagen
  }
}

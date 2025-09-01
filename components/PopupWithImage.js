import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this.popupElement = document.querySelector(popupSelector);
    this._title = this.popupElement.querySelector(".popup__image-title");
    this._link = this.popupElement.querySelector(".popup__image");
  }
  open(title, link) {
    super.open(); // Seguir ejecutando metodo open del padre
    this._title.textContent = title;
    this._link.src = link;
  }
}

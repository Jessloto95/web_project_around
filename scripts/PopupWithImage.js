import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupSelector = document.querySelector(popupSelector);
    this._title = this._popupSelector.querySelector(".popup__image-title");
    this._link = this.popupSelector.querySelector(".popup__image");
  }
  open(title, link) {
    super.open(); // Seguir ejecutando metodo open del padre
    this._title.textContent = title;
    this._link.src = link;
  }
}

import Popup from "./Popup.js";

class export default PopupWithImage extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._title = this._popupSelector.querySelector(".popup__image-title")
    this._link = this.popupSelector.querySelector(".popup__image")
  }
   open (){
    super.open(); // Seguir ejecutando metodo open del padre
    this._title.textContent = title;
    this._link.src = _link;
   }
}

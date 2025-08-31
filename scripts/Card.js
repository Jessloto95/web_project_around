import { closeEsc } from "./utils.js";

export default class Card {
  constructor(title, link) {
    this.link = link;
    this.title = title;
    this.selector = selector || ".card__content";
    this._templateCard = document.querySelector(".template-card");
    this.handleCardClick = handleCardClick;
  }

  _generateElement() {
    this.cloneCard = _templateCard
      .cloneNode(true)
      .content.querySelector(this.selector);

    this._cardTitle = this.cloneCard.querySelector(".card__photo-name");
    this._cardTitle.textContent = this.title;
    this._cardImage = this._cloneCard.querySelector(".card__photo");
    this._cardImage.src = this.link;

    return this._cloneCard;
  }

  createCard() {
    this._element = this._generateElement();

    this._setupEventListeners();
    return this._element;
  }

  _setupEventListeners() {
    // Boton eliminar carta
    this._trashElement = this._cloneCard
      .querySelector("#deleteCard")
      .addEventListener("click", (evt) => {
        this.deleteCard();
      });

    //Boton de like
    this._buttonLike.addEventListener("click", () => {
      this.likeCard();
    });

    //Abrir imagen
    this._cardImage.addEventListener("click", () => {
      this.handleCardClick(this.title, this.link);
    });
  }
  deleteCard() {
    this._cloneCard.remove();
  }

  likeCard() {
    this._buttonLike.classList.toggle("card__button_like_active");
  }

  // openImage() {
  //   this._popupOpenImage = document.querySelector("#openImage");
  //   this._popupOpenImage.classList.add("popup_opened");
  //   let imagePopup = this._popupOpenImage.querySelector(".popup__image");
  //   let titlePopup = this._popupOpenImage.querySelector(".popup__image-title");
  //   imagePopup.src = this.link;
  //   titlePopup.textContent = this.title;
  // }
}

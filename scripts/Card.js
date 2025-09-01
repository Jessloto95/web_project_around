import { closeEsc } from "./utils.js";

export default class Card {
  constructor(title, link, selector, handleCardClick) {
    this._link = link;
    this._title = title;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _generateElement() {
    const template = document.querySelector(this._selector).content;
    this._element = template.querySelector(".card__content").cloneNode(true);

    this._cardTitle = this._element.querySelector(".card__photo-name");
    this._cardTitle.textContent = this._title;
    this._cardImage = this._element.querySelector(".card__photo");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._trashButton = this._element.querySelector("#deleteCard");
    this._buttonLike = this._element.querySelector(".card__button-like");
    this._buttonLikeImage = this._element.querySelector(
      ".card__button-like-image"
    );

    return this._element;
  }

  createCard() {
    this._generateElement();

    this._setupEventListeners();
    return this._element;
  }

  _setupEventListeners() {
    // Boton eliminar carta
    this._trashButton.addEventListener("click", () => {
      this.deleteCard();
    });

    //Boton de like
    this._buttonLike.addEventListener("click", () => {
      this.likeCard();
    });

    //Abrir imagen
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    });
  }
  deleteCard() {
    this._element.remove();
  }

  likeCard() {
    const isActive = this._buttonLike.classList.toggle(
      "card__button-like_active"
    );
    if (isActive) {
      this._buttonLikeImage.src = "../images/button_like-active.png";
    } else {
      this._buttonLikeImage.src = "../images/button_like.png";
    }
  }
}

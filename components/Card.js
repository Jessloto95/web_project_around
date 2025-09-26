import { api } from "./Api.js";

export default class Card {
  constructor(data, selector, handleCardClick, handleDeleteConfirm) {
    this._link = data.link;
    this._title = data.name;
    this._id = data._id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteConfirm = handleDeleteConfirm;
    this._isLiked = data.isLiked;
    this._api = api;
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

    // Establecer el estado inicial del like
    if (this._isLiked) {
      this._buttonLikeImage.src = "../images/button_like-active.png";
    } else {
      this._buttonLikeImage.src = "../images/button_like.png";
    }
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
      this._handleDeleteConfirm(this._id, this);
    });

    //Boton de like
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeClick(); // Añade un escuchador de clic para dar "me gusta" a la tarjeta
    });

    //Abrir imagen
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    }); // Añade un escuchador de clic para abrir la imagen en un popup
  }
  deleteCard() {
    this._element.remove(); // Elimina el elemento de la tarjeta del DOM
    this._element = null;
  }

  _handleLikeClick() {
    if (this._isLiked) {
      this._api.removeLikeCard(this._id).then(() => {
        this._isLiked = false;
        this._buttonLikeImage.src = "../images/button_like.png";
      });
    } else {
      this._api.likeCard(this._id).then(() => {
        this._isLiked = true;
        this._buttonLikeImage.src = "../images/button_like-active.png";
      });
    }
  }
}

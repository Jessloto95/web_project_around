//import { closeEsc } from "./utils.js";

export default class Card {
  constructor(title, link, selector, handleCardClick) {
    this._link = link; // Guarda el enlace de la imagen
    this._title = title; // Guarda el título de la tarjeta
    this._selector = selector; // Guarda el selector de la plantilla HTML para la tarjeta
    this._handleCardClick = handleCardClick; // Guarda la función de callback para cuando se hace clic en la imagen de la tarjeta
  }

  _generateElement() {
    const template = document.querySelector(this._selector).content; // Obtiene el contenido de la plantilla HTML
    this._element = template.querySelector(".card__content").cloneNode(true); // Clona el elemento principal de la tarjeta de la plantilla

    this._cardTitle = this._element.querySelector(".card__photo-name"); // Selecciona el elemento del título de la tarjeta
    this._cardTitle.textContent = this._title; // Establece el texto del título de la tarjeta
    this._cardImage = this._element.querySelector(".card__photo"); // Selecciona el elemento de la imagen de la tarjeta
    this._cardImage.src = this._link; // Establece la fuente de la imagen
    this._cardImage.alt = this._title; // Establece el texto alternativo de la imagen

    this._trashButton = this._element.querySelector("#deleteCard"); // Selecciona el botón de eliminar
    this._buttonLike = this._element.querySelector(".card__button-like"); // Selecciona el botón de "me gusta"
    this._buttonLikeImage = this._element.querySelector(
      ".card__button-like-image"
    ); // Selecciona la imagen dentro del botón de "me gusta"

    return this._element; // Devuelve el elemento de la tarjeta creado
  }

  createCard() {
    this._generateElement(); // Genera el elemento HTML de la tarjeta

    this._setupEventListeners(); // Configura los escuchadores de eventos para la tarjeta
    return this._element; // Devuelve el elemento de la tarjeta completamente configurado
  }

  _setupEventListeners() {
    // Boton eliminar carta
    this._trashButton.addEventListener("click", () => {
      this.deleteCard(); // Añade un escuchador de clic para eliminar la tarjeta
    });

    //Boton de like
    this._buttonLike.addEventListener("click", () => {
      this.likeCard(); // Añade un escuchador de clic para dar "me gusta" a la tarjeta
    });

    //Abrir imagen
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    }); // Añade un escuchador de clic para abrir la imagen en un popup
  }
  deleteCard() {
    this._element.remove(); // Elimina el elemento de la tarjeta del DOM
  }

  likeCard() {
    const isActive = this._buttonLike.classList.toggle(
      "card__button-like_active"
    ); // Alterna la clase 'card__button-like_active' en el botón de "me gusta"
    if (isActive) {
      this._buttonLikeImage.src = "../images/button_like-active.png"; // Cambia la imagen a la versión activa
    } else {
      this._buttonLikeImage.src = "../images/button_like.png"; // Cambia la imagen a la versión inactiva
    }
  }
}

export default class Card {
  constructor(title, link) {
    this.link = link;
    this.title = title;
    this._templateCard = document.querySelector(".template-card");
  }

  generateElement() {
    this._cloneCard = this._templateCard.content
      .querySelector(".card__content")
      .cloneNode(true);
    this._cardTitle = this._cloneCard.querySelector(".card__photo-name");
    this._cardTitle.textContent = this.title;
    this._cardImage = this._cloneCard.querySelector(".card__photo");
    this._cardImage.src = this.link;
    this._buttonLike = this._cloneCard.querySelector(
      ".card__button-like-image"
    );
    this._setupEventListeners();
    return this._cloneCard;
  }

  _setupEventListeners() {
    this._trashElement = this._cloneCard
      .querySelector("#deleteCard")
      .addEventListener("click", () => {
        this.deleteCard();
      });
    this._buttonLike.addEventListener("click", () => {
      this.likeCard();
    });
    this._cardImage.addEventListener("click", () => {
      this.openImage();
    });
  }
  deleteCard() {
    this._cloneCard.remove();
  }

  likeCard() {
    if (this._buttonLike.src == "http://127.0.0.1:5500/images/Union.png") {
      this._buttonLike.src = "./images/button_like.png";
    } else {
      this._buttonLike.src = "./images/Union.png";
    }
  }

  openImage() {
    this._popupOpenImage = document.querySelector("#openImage");
    this._popupOpenImage.classList.add("popup_opened");
    let imagePopup = this._popupOpenImage.querySelector(".popup__image");
    let titlePopup = this._popupOpenImage.querySelector(".popup__image-title");
    imagePopup.src = this.link;
    titlePopup.textContent = this.title;
  }
}

export default class Card {
  constructor(title, link) {
    this.link = link;
    this.title = title;
    this.templateCard = document.querySelector(".template-card");
  }

  generateElement() {
    this.cloneCard = this.templateCard.content
      .querySelector(".card__content")
      .cloneNode(true);
    this.cardTitle = this.cloneCard.querySelector(".card__photo-name");
    this.cardTitle.textContent = this.title;
    this.cardImage = this.cloneCard.querySelector(".card__photo");
    this.cardImage.src = this.link;
    //this.cardList.append(cloneCard);
    return this.cloneCard;
  }

  setupEventListeners() {
    this.trashElement = cloneCard
      .querySelector("#deleteCard")
      .addEventListener("click", () => {
        this.deleteCard();
      });
  }

  deleteCard() {}

  likeCard() {
    this.buttonLike = cloneCard
      .querySelector(".card__button-like-image")
      .addEventListener("click", () => {
        if (this.src == "http://127.0.0.1:5500/images/Union.png") {
          this.buttonLike.src = "./images/button_like.png";
        } else {
          this.buttonLike.src = "./images/Union.png";
        }
      });
  }
}

//class Card {
//  constructor( data,cardSelector){
//      this._name = data.name;
//     this._name = data.link;
//     this._cardSelector = cardSelector;
// }
//}

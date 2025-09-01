import FormValidator from "./FormValidator.js";
import { cardList, butEdit, butaddImage } from "./utils.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const userProfileConfig = {
  name: ".profile__name",
  about: ".profile__hobbie",
}; //******* */

const userProfile = new UserInfo({
  nameSelector: userProfileConfig.name,
  aboutSelector: userProfileConfig.about,
});

console.log("nameElement:", userProfile.nameElement);
console.log("aboutElement:", userProfile.aboutElement);

const popupProfile = new PopupWithForm("#editProfile", "#formEdit", (data) => {
  userProfile.setUserInfo(data.name, data.about);
});

popupProfile.setEventListeners();

const popupAddCart = new PopupWithForm(
  "#addImage",
  ".popup__form-add",
  (data) => {
    const newCard = new Card(
      data.title,
      data.url,
      ".card__content",
      (title, link) => {
        //abrimos la carta
        popupOpenCard.open(title, link);
      }
    );

    const cardElement = newCard.createCard();
    galleryConsiner.append(cardElement);
  }
);

popupAddCart.setEventListeners();

const popupOpenCard = new PopupWithImage("#openImage");
popupOpenCard.setEventListeners();

// FormValidator settings
const settings = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
};

//LLamado de la Validacion
const formValidate = new FormValidator(settings);
formValidate.enableValidation();

//eventos de botones
butEdit.addEventListener("click", () => {
  // const currentUser = userProfile.getUserInfo();
  // document.querySelector("#name-input").value = currentUser.name;
  // document.querySelector("#hobbie-input").value = currentUser.about;
  popupProfile.open();
});
butaddImage.addEventListener("click", () => popupAddCart.open());

//Bucle para Agregar tarjeta
function addCard(data) {
  console.log(data);
  const newCard = new Card(
    data.name,
    data.link,
    ".template-card",
    (title, link) => {
      popupOpenCard.open(title, link);
    }
  );
  return newCard.createCard();
}

//Agregar a la seccion
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(addCard(item));
    },
  },
  ".card"
);

cardSection.renderer();

export { settings };

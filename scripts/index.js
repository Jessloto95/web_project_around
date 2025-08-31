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
  name: userProfileConfig.name,
  about: userProfileConfig.about,
});

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
butEdit.addEventListener("click", () => popupProfile.open());
butaddImage.addEventListener("click", () => popupAddCart.open());

//Bucle para Agregar tarjeta
function addCard(data) {
  const newCard = new Card(data.name, data.link, ".card__content", () => {
    popupOpenCard.open(data.name, data.link);
  });
  return newCard.createCard();
}

//Agregar a la seccion
const cardSection = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      cardSection.addItem(addCard(item));
    },
  },
  ".card"
);

cardSection.renderer();

export { settings };

//////********************************************************* */
// const popupProfile = document.querySelector("#editProfile");
// const Profileform = popupProfile.querySelector("#formEdit");
// const SaveEditImg = document.querySelector("#submit_card");

// const popupImage = document.querySelector("#addImage");
// const popupOpenImage = document.querySelector("#openImage");

// const imgeTitle = document.querySelector("#inputNamePlace");
// const imgeLink = document.querySelector("#inputImagePlace");

// const butCloseEdit = document.querySelector("#buttonEdit");
// const butCloseEditImg = document.querySelector("#buttoneditImage");
// const butCloseImg = document.querySelector("#closeImage");

// //Bucle para agregar tarjetas
// initialCards.forEach(function (item) {
//   const cloneCard = createCard(item.name, item.link);
//   cardList.append(cloneCard);
// });

// function closeditImage() {
//   popupImage.classList.remove("popup_opened");
// }

// //Funcion para enviar formulario de editar imagen
// function submitCard(event) {
//   event.preventDefault();
//   const Title = imgeTitle.value;
//   const Link = imgeLink.value;
//   const newCard = createCard(Title, Link);
//   cardList.append(newCard);
//   closeditImage();
// }
// SaveEditImg.addEventListener("submit", submitCard);

// //funcion para agregar tarjetas
// function createCard(name, link) {
//   return new Card(name, link).generateElement();
// }

// //Boton de guardar
// function savEdit(evt) {
//   evt.preventDefault();
//   infName.textContent = inputName.value;
//   infHobbie.textContent = inputHobbie.value;
//   closePopup(popupProfile);
// }

// document.addEventListener("keydown", (evt) => {
//   closeEsc(evt, [popupProfile, popupImage, popupOpenImage]);
// });
// popupProfile.addEventListener("submit", savEdit);
// butCloseEdit.addEventListener("click", function () {
//   closePopup(popupProfile);
// });
// butCloseEditImg.addEventListener("click", function () {
//   closePopup(popupImage);
// });
// butCloseImg.addEventListener("click", function () {
//   closePopup(popupOpenImage);
// });
// butEdit.addEventListener("click", function () {
//   openEdit(popupProfile, infName, infHobbie);
// });
// butaddImage.addEventListener("click", function () {
//   openAddImage(popupImage, infName, infHobbie);
// });
// popupProfile.addEventListener("click", function (evt) {
//   closeOutside(popupProfile, evt);
// });
// popupImage.addEventListener("click", function (evt) {
//   closeOutside(popupImage, evt);
// });
// popupOpenImage.addEventListener("click", function (evt) {
//   closeOutside(popupOpenImage, evt);
// });

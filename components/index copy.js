import { api } from "./Api.js";
import FormValidator from "./FormValidator.js"; // Importa la clase FormValidator
import { butEdit, butaddImage } from "./utils.js"; // Importa variables y funciones de utils.js
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

// Configuración de selectores para la información del usuario
const userProfileConfig = {
  name: ".profile__name",
  about: ".profile__hobbie",
};

// Instancia de UserInfo para manejar la información del perfil del usuario
const userProfile = new UserInfo({
  nameSelector: userProfileConfig.name,
  aboutSelector: userProfileConfig.about,
});

// Cargar la información del usuario desde la API al inicio
api.getUser()
.then((userData) =>{
  userProfile.setUserInfo(userData.name, userData.about);
});


// Instancia de PopupWithForm para el popup de edición de perfil
const popupProfile = new PopupWithForm("#editProfile", "#formEdit", (data) => {
  api.userEdit(data.name, data.about)
  .then((updatedUser) => {
    userProfile.setUserInfo(updatedUser.name, updatedUser.about);//Actualiza los datos del la API
  })
});

popupProfile.setEventListeners();

//Agregando API para las Trjetas iniciales
api.getInitialCards().then(function (initialCards) {
  const cardSection = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        console.log(item);
        cardSection.addItem(addCard(item));
      },
    },
    ".card"
  );

  cardSection.renderer();

  // Instancia de PopupWithForm para el popup de añadir nueva imagen
  const popupAddCart = new PopupWithForm(
    "#addImage",
    ".popup__form-add",
    (data) => {
      api.createCard(data.title, data.url).then(function (card) {
        const newCard = new Card(
          card,
          ".template-card",
          (title, link) => {
            popupOpenCard.open(title, link);
          },
          (id) => {
            return api.deleteCard(id);
          }
        );

        const cardElement = newCard.createCard();
        console.log(cardElement);
        cardSection.addItem(cardElement);
      });
    }
  );

  popupAddCart.setEventListeners();

  const popupOpenCard = new PopupWithImage("#openImage");
  popupOpenCard.setEventListeners();

  // Configuración de la validación de formularios
  const settings = {
    formSelector: ".popup__content",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
  };

  // Instancia de FormValidator para habilitar la validación en los formularios
  const formValidate = new FormValidator(settings);
  formValidate.enableValidation();

  // Eventos de botones
  butEdit.addEventListener("click", () => {
    const currentUserInfo = userProfile.getUserInfo();
    document.querySelector("#name").value = currentUserInfo.name;
    document.querySelector("#about").value = currentUserInfo.about;
    popupProfile.open();
  });
  butaddImage.addEventListener("click", () => popupAddCart.open());

  // Función para crear y devolver un elemento de tarjeta
  function addCard(data) {
    const cardData = {
      _id: data._id,
      name: data.name,
      link: data.link,
      isLiked: data.isLiked,
    };
    const newCard = new Card(
      cardData,
      ".template-card",
      (title, link) => {
        popupOpenCard.open(cardData.title, cardData.link);
      },
      (id) => {
        return api.deleteCard(id);
      }
    );
    return newCard.createCard();
  }
});

import { api } from "../components/Api.js";
import FormValidator from "../components/FormValidator.js"; // Importa la clase FormValidator
import { butEdit, butaddImage } from "../components/utils.js"; // Importa variables y funciones de utils.js
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
// Variables para almacenar la tarjeta que se quiere eliminar
let cardToDeleteId = null;
let cardInstanceToDelete = null;

// Configuración de selectores para la información del usuario
const userProfileConfig = {
  name: ".profile__name",
  about: ".profile__hobbie",
  avatar: ".profile__person",
};

// Instancia de UserInfo para manejar la información del perfil del usuario
const userProfile = new UserInfo({
  nameSelector: userProfileConfig.name,
  aboutSelector: userProfileConfig.about,
  avatarSelector: userProfileConfig.avatar,
});

// Cargar la información del usuario desde la API al inicio
api
  .getUser()
  .then((userData) => {
    userProfile.setUserInfo(userData.name, userData.about);
    userProfile.setAvatar(userData.avatar);
  })
  .catch((err) => {
    console.error("Error al obtener la información del usuario:", err);
  });

// Instancia del popup de confirmación para eliminar tarjetas
const popupDeleteCard = new PopupWithConfirmation("#deleteCard");
popupDeleteCard.setEventListeners();

// Configurar la acción de confirmación
popupDeleteCard.setSubmitAction(() => {
  if (cardToDeleteId && cardInstanceToDelete) {
    popupDeleteCard.setLoadingState(true, "Guardando...");

    api
      .deleteCard(cardToDeleteId)
      .then(() => {
        cardInstanceToDelete.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.error("Error al eliminar la tarjeta:", err);
      })
      .finally(() => {
        popupDeleteCard.setLoadingState(false);
        cardToDeleteId = null;
        cardInstanceToDelete = null;
      });
  }
});

// Función para manejar la confirmación de eliminación
function handleDeleteConfirmation(cardId, cardInstance) {
  cardToDeleteId = cardId;
  cardInstanceToDelete = cardInstance;
  popupDeleteCard.open();
}

// Instancia de PopupWithForm para el popup de edición de perfil
const popupProfile = new PopupWithForm("#editProfile", "#formEdit", (data) => {
  popupProfile.setLoadingState(true, "Guardando...");
  api
    .userEdit(data.name, data.about)
    .then((updatedUser) => {
      userProfile.setUserInfo(updatedUser.name, updatedUser.about); //Actualiza los datos del la API
      popupProfile.close();
    })
    .catch((err) => {
      console.error("Error al actualizar el perfil:", err);
    })
    .finally(() => {
      popupProfile.setLoadingState(false);
    });
});

popupProfile.setEventListeners();

// Nuevo popup para actualizar el avatar
const popupEditAvatar = new PopupWithForm(
  "#editAvatar",
  "#formEditAvatar",
  (data) => {
    popupEditAvatar.setLoadingState(true, "Guardando...");
    api
      .editAvatar(data.avatar)
      .then((updatedUser) => {
        userProfile.setAvatar(updatedUser.avatar);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
      })
      .finally(() => {
        popupEditAvatar.setLoadingState(false);
      });
  }
);
popupEditAvatar.setEventListeners();

// Instancia de PopupWithImage para ver imágenes
const popupOpenCard = new PopupWithImage("#openImage");
popupOpenCard.setEventListeners();

let cardSection = {};
//Agregando API para las Trjetas iniciales
api
  .getInitialCards()
  .then(function (initialCards) {
    cardSection = new Section(
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

    // Evento para abrir el popup de edición de avatar
    document
      .querySelector(".profile__person-conteiner")
      .addEventListener("click", () => {
        popupEditAvatar.open();
      });

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
          popupOpenCard.open(cardData.name, cardData.link);
        },
        handleDeleteConfirmation
      );
      return newCard.createCard();
    }
  })
  .catch((err) => {
    console.error("Error al obtener las tarjetas iniciales:", err);
  });
// Instancia de PopupWithForm para el popup de añadir nueva imagen
const popupAddCart = new PopupWithForm(
  "#addImage",
  ".popup__form-add",
  (data) => {
    popupAddCart.setLoadingState(true, "Creando...");
    api
      .createCard(data.title, data.url)
      .then(function (card) {
        const newCard = new Card(
          card,
          ".template-card",
          (title, link) => {
            popupOpenCard.open(title, link);
          },
          handleDeleteConfirmation
        );

        const cardElement = newCard.createCard();
        console.log(cardElement);
        cardSection.addItem(cardElement);
        popupAddCart.close();
      })
      .finally(() => {
        popupAddCart.setLoadingState(false);
      });
  }
);
popupAddCart.setEventListeners();

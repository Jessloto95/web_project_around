import { api } from "./Api.js";
import FormValidator from "./FormValidator.js"; // Importa la clase FormValidator
import { cardList, butEdit, butaddImage } from "./utils.js"; // Importa variables y funciones de utils.js
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

// Configuración de selectores para la información del usuario
const userProfileConfig = {
  name: ".profile__name", // Selector para el nombre del perfil
  about: ".profile__hobbie", // Selector para el hobby/ocupación del perfil
};

// Instancia de UserInfo para manejar la información del perfil del usuario
const userProfile = new UserInfo({
  nameSelector: userProfileConfig.name,
  aboutSelector: userProfileConfig.about,
});

console.log("nameElement:", userProfile.nameElement);
console.log("aboutElement:", userProfile.aboutElement);

// Instancia de PopupWithForm para el popup de edición de perfil
const popupProfile = new PopupWithForm("#editProfile", "#formEdit", (data) => {
  userProfile.setUserInfo(data.name, data.about); // Actualiza la información del usuario con los datos del formulario
});

popupProfile.setEventListeners(); // Configura los escuchadores de eventos para el popup de edición de perfil

//Agregando API para las Trjetas iniciales
api.getInitialCards().then(function (initialCards) {
  // Instancia de Section para manejar la renderización de las tarjetas
  const cardSection = new Section(
    {
      items: initialCards, // Las tarjetas iniciales a renderizar
      renderer: (item) => {
        cardSection.addItem(addCard(item)); // Función que se llama para cada elemento del array, añadiendo la tarjeta al DOM
      },
    },
    ".card" // Selector del contenedor donde se añadirán las tarjetas
  );

  cardSection.renderer(); // Renderiza las tarjetas iniciales en la página

  // Instancia de PopupWithForm para el popup de añadir nueva imagen
  const popupAddCart = new PopupWithForm(
    "#addImage", // Selector del popup de añadir imagen
    ".popup__form-add", // Selector del formulario dentro del popup
    (data) => {
      api.createCard(data.title, data.url).then(function (card) {
        const newCard = new Card(
          card,
          ".template-card", // Selector de la plantilla para crear la tarjeta
          (title, link) => {
            // Función de callback para cuando se hace clic en la imagen de la tarjeta
            popupOpenCard.open(title, link); // Abre el popup de imagen con el título y enlace de la tarjeta
          }
        );

        const cardElement = newCard.createCard(); // Crea el elemento DOM de la nueva tarjeta
        console.log(cardElement);
        cardSection.addItem(cardElement); // Añade la nueva tarjeta al inicio de la sección de tarjetas
      });
    }
  );

  popupAddCart.setEventListeners(); // Configura los escuchadores de eventos para el popup de añadir imagen

  // Instancia de PopupWithImage para el popup de visualización de imagen
  const popupOpenCard = new PopupWithImage("#openImage"); // Selector del popup de visualización de imagen
  popupOpenCard.setEventListeners(); // Configura los escuchadores de eventos para el popup de visualización de imagen

  // Configuración de la validación de formularios
  const settings = {
    formSelector: ".popup__content", // Selector para los formularios dentro de los popups
    inputSelector: ".popup__input", // Selector para los campos de entrada
    submitButtonSelector: ".popup__button", // Selector para los botones de envío
  };

  // Instancia de FormValidator para habilitar la validación en los formularios
  const formValidate = new FormValidator(settings);
  formValidate.enableValidation(); // Habilita la validación para todos los formularios

  // Eventos de botones
  butEdit.addEventListener("click", () => {
    // const currentUser = userProfile.getUserInfo();
    // document.querySelector("#name-input").value = currentUser.name;
    // document.querySelector("#hobbie-input").value = currentUser.about;
    popupProfile.open(); // Abre el popup de edición de perfil
  });
  butaddImage.addEventListener("click", () => popupAddCart.open()); // Abre el popup de añadir imagen al hacer clic en el botón

  // Función para crear y devolver un elemento de tarjeta
  function addCard(data) {
    const newCard = new Card(
      data,
      ".template-card", // Selector de la plantilla para crear la tarjeta
      (title, link) => {
        popupOpenCard.open(data.title, data.link); // Abre el popup de imagen al hacer clic en la tarjeta
      }
    );
    return newCard.createCard(); // Crea y devuelve el elemento DOM de la tarjeta
  }
});

export const popUp = document.querySelector(".popup"); // Selecciona el primer elemento con la clase 'popup' (generalmente el popup de edición de perfil)
export const infName = document.querySelector(".profile__name"); // Selecciona el elemento que muestra el nombre del perfil
export const cardList = document.querySelector(".card"); // Selecciona el contenedor donde se listan las tarjetas
export const infHobbie = document.querySelector(".profile__hobbie"); // Selecciona el elemento que muestra el hobby/ocupación del perfil

//Exportando variables de botones
export const butEdit = document.querySelector(".profile__edit-button"); // Selecciona el botón para editar el perfil
export const butaddImage = document.querySelector(".profile__add-button"); // Selecciona el botón para añadir una nueva imagen

//Exportar variables para agregar inputs
export const inputName = document.querySelector(".popup__input_name"); // Selecciona el campo de entrada para el nombre en un popup
export const inputHobbie = document.querySelector(".popup__input_hobbie"); // Selecciona el campo de entrada para el hobby/ocupación en un popup

//Funcion para tecla esc keyPush
export function closeEsc(evt) {
  // Comprueba si la tecla presionada es 'Escape'
  if (evt.key === "Escape") {
    popups.forEach((popup) => closePopup(popup)); // intentara cerrar todos los popups.
  }
}

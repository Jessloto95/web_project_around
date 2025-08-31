export const popUp = document.querySelector(".popup");
export const infName = document.querySelector(".profile__name"); //nameDefault
export const cardList = document.querySelector(".card"); //galleryContainer
export const infHobbie = document.querySelector(".profile__hobbie"); //occupationDefault

//Exportando variables de botones
export const butEdit = document.querySelector(".profile__edit-button"); //btnEdit
export const butaddImage = document.querySelector(".profile__add-button"); //btnAdd

//Exportar variables para agregar inputs
export const inputName = document.querySelector(".popup__input_name"); //inName
export const inputHobbie = document.querySelector(".popup__input_hobbie"); //inOccupation

//Funcion para tecla esc keyPush
export function closeEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => closePopup(popup)); //**** */
  }
}

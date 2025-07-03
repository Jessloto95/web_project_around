let form = document.querySelector("#editProfile");
let inputName = document.querySelector(".popup__input_name");
let inputHobbie = document.querySelector(".popup__input_hobbie");
let infName = document.querySelector(".profile__name");
let infHobbie = document.querySelector(".profile__hobbie");
let butEdit = document.querySelector(".profile__edit-button");
let butaddImage = document.querySelector(".profile__add-button");
let butCloseEdit = document.querySelector("#buttonEdit");
let butCloseEditImg = document.querySelector("#buttoneditImage");
const templateCard = document.querySelector(".template-card");
const cardList = document.querySelector(".card");

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
//Bucle para agregar tarjetas
initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});
//funcion para agregar tarjetas
function createCard(name, link) {
  const cloneCard = templateCard.content
    .querySelector(".card__content")
    .cloneNode(true);
  console.log(cloneCard);
  const cardTitle = cloneCard.querySelector(".card__photo-name");
  const cardImage = cloneCard.querySelector(".card__photo");
  cardTitle.textContent = name;
  cardList.append(cloneCard);
  cardImage.src = link;
}

const deleteCard = cloneCard.querySelector("#deleteCard");
deleteCard.addEventListener("click", function () {
  cloneCard.remove();
});
//funcion para abrir editar perfil
function openedit(evt) {
  let popup = document.querySelector("#editProfile");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popup.classList.add("popup_opened");
}
//funcion para abrir editar imagen
function openaddImage(evt) {
  let popup = document.querySelector("#addImage");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popup.classList.add("popup_opened");
}
//Boton de guardar
function save(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
  close();
}

//Funcion para cerrar formulario de editar perfil
function closedit(evt) {
  let popup = document.querySelector("#editProfile");
  popup.classList.remove("popup_opened");
}
//Funcion para cerrar formulario de editar imagen
function closeditImage(evt) {
  let popup = document.querySelector("#addImage");
  popup.classList.remove("popup_opened");
}

form.addEventListener("submit", save);
butCloseEdit.addEventListener("click", closedit);
butCloseEditImg.addEventListener("click", closeditImage);
butEdit.addEventListener("click", openedit);
butaddImage.addEventListener("click", openaddImage);

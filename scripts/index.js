const popupProfile = document.querySelector("#editProfile");
const popupImage = document.querySelector("#addImage");
const popupOpenImage = document.querySelector("#openImage");
const inputName = document.querySelector(".popup__input_name");
const inputHobbie = document.querySelector(".popup__input_hobbie");
const infName = document.querySelector(".profile__name");
const infHobbie = document.querySelector(".profile__hobbie");
const imgeTitle = document.querySelector("#inputNamePlace");
const imgeLink = document.querySelector("#inputImagePlace");
const butEdit = document.querySelector(".profile__edit-button");
const butaddImage = document.querySelector(".profile__add-button");
const butCloseEdit = document.querySelector("#buttonEdit");
const butCloseEditImg = document.querySelector("#buttoneditImage");
const butCloseImg = document.querySelector("#closeImage");
const SaveEditImg = document.querySelector("#submit_card");
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

//Funcion para cerrar formulario de editar imagen
function closeditImage(evt) {
  popupImage.classList.remove("popup_opened");
}
//Funcion para enviar formulario de editar imagen
function submitCard(event) {
  event.preventDefault();
  const Title = imgeTitle.value;
  const Link = imgeLink.value;
  createCard(Title, Link);
  closeditImage();
}
SaveEditImg.addEventListener("submit", submitCard);

//funcion para agregar tarjetas
function createCard(name, link) {
  const cloneCard = templateCard.content
    .querySelector(".card__content")
    .cloneNode(true);
  const cardTitle = cloneCard.querySelector(".card__photo-name");
  const cardImage = cloneCard.querySelector(".card__photo");
  cardTitle.textContent = name;
  cardList.append(cloneCard);
  cardImage.src = link;

  const deleteCard = cloneCard.querySelector("#deleteCard");
  deleteCard.addEventListener("click", function () {
    cloneCard.remove();
  });
  cardImage.addEventListener("click", function () {
    openImage(name, link);
  });
  //funcion para like
  const likeCard = cloneCard.querySelector(".card__button-like-image");
  likeCard.addEventListener("click", function () {
    if (likeCard.src == "http://127.0.0.1:5500/images/Union.png") {
      likeCard.src = "./images/button_like.png";
    } else {
      likeCard.src = "./images/Union.png";
    }
  });
}

//funcion para abrir editar perfil
function openedit(evt) {
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupProfile.classList.add("popup_opened");
}
//funcion para abrir editar imagen
function openaddImage(evt) {
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupImage.classList.add("popup_opened");
}
//funcion para abrir imagen *************************
function openImage(name, link) {
  popupOpenImage.classList.add("popup_opened");
  let imagePopup = popupOpenImage.querySelector(".popup__image");
  let titlePopup = popupOpenImage.querySelector(".popup__image-title");
  imagePopup.src = link;
  titlePopup.textContent = name;
}

//Boton de guardar
function savEdit(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
  closedit();
}

//Funcion para cerrar formulario de editar imagen
function closeditImage(evt) {
  popupImage.classList.remove("popup_opened");
}

//Funcion para cerrar formulario de editar perfil
function closedit(evt) {
  popupProfile.classList.remove("popup_opened");
}

//Funcion para cerrar Imagen
function closeImage(evt) {
  popupOpenImage.classList.remove("popup_opened");
}

function closeOutsideEdditProfile(evt){
  if(evt.target == popupProfile){
    closedit();
  }
}

function closeOutsideAddImage(evt){
  if(evt.target == popupImage){
    closeditImage();
  }
}

function closeOutsideImage(evt){
  if(evt.target == popupOpenImage){
    closeImage();
  }
}

function closeEsc(evt){
  if(evt.key == "Escape"){
    closedit();
    closeImage();
    closeditImage();
  };
}

document.addEventListener("keydown", closeEsc);
popupProfile.addEventListener("click", closeOutsideEdditProfile);
popupImage.addEventListener("click", closeOutsideAddImage);
popupOpenImage.addEventListener("click", closeOutsideImage);
popupProfile.addEventListener("submit", savEdit);
butCloseEdit.addEventListener("click", closedit);
butCloseEditImg.addEventListener("click", closeditImage);
butCloseImg.addEventListener("click", closeImage);
butEdit.addEventListener("click", openedit);
butaddImage.addEventListener("click", openaddImage);

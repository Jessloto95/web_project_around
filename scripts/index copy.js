let form = document.querySelector(".popup__content");
let inputName = document.querySelector(".popup__input_name");
let inputHobbie = document.querySelector(".popup__input_hobbie");
let infName = document.querySelector(".profile__name");
let infHobbie = document.querySelector(".profile__hobbie");
let butEdit = document.querySelector(".profile__edit-button");
let butClose = document.querySelector(".popup__button_close");
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

function open(evt) {
  let popup = document.querySelector(".popup");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popup.classList.add("popup_opened");
}

function save(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
  close();
}

function close(evt) {
  let popup = document.querySelector(".popup");
  popup.classList.remove("popup_opened");
}

form.addEventListener("submit", save);
butClose.addEventListener("click", close);
butEdit.addEventListener("click", open); //let formElement = document.querySelector(".popup__content")
//console.log(formElement)

//formElement.addEventListener('submit', handleProfileFormSubmit);

//function handleProfileFormSubmit(evt) {console.log("funciona")}


let form = document.querySelector(".popup__content")
let inputName = document.querySelector(".popup__input_name")
let inputHobbie = document.querySelector(".popup__input_hobbie")
let infName = document.querySelector(".profile__name")
let infHobbie =document.querySelector(".profile__hobbie")
let butEdit = document.querySelector(".profile__edit-button")
let butClose = document.querySelector(".popup__button_close")

function open(evt) { 
    let popup = document.querySelector(".popup")
    inputName.value = infName.textContent;
    inputName.value = infHobbie.textContent;
    popup.classList.add("popup_opened")
}

function save(evt) {
    evt.preventDefault();
    infName.textContent = inputName.value;
    infHobbie.textContent = inputHobbie.value;
    close()
}
function close(evt) {
    let popup = document.querySelector(".popup")
    popup.classList.remove("popup_opened")
}

butEdit.addEventListener('click', open);
form.addEventListener('submit', save);
butClose.addEventListener('click', close);


//let formElement = document.querySelector(".popup__content")
//console.log(formElement)

//formElement.addEventListener('submit', handleProfileFormSubmit);

//function handleProfileFormSubmit(evt) {console.log("funciona")}

let form = document.querySelector(".popup__content")

form.addEventListener('submit', save);

function save(evt) {console.log("funciona")}


let butEdit = document.querySelector(".profile__edit-button")

butEdit.addEventListener('click', open);

function open(evt) { 
    let popup = document.querySelector(".popup")
    popup.classList.add("popup_opened")
}



let butClose = document.querySelector(".popup__button_close")

butClose.addEventListener('click', close);

function close(evt) {
    let popup = document.querySelector(".popup")
    popup.classList.remove("popup_opened")
}


//let formElement = document.querySelector(".popup__content")
//console.log(formElement)

//formElement.addEventListener('submit', handleProfileFormSubmit);

//function handleProfileFormSubmit(evt) {console.log("funciona")}
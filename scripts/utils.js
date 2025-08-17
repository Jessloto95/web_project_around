export const settings = {
  formSelector: "form",
  inputSelector: "input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export function openEdit(popupProfile, infName, infHobbie) {
  const inputName = popupProfile.querySelector(".popup__input_name");
  const inputHobbie = popupProfile.querySelector(".popup__input_hobbie");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupProfile.classList.add("popup_opened");
}

export function openAddImage(popupImage, infName, infHobbie) {
  const inputName = popupImage.querySelector(".popup__input_name");
  const inputHobbie = popupImage.querySelector(".popup__input_hobbie");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupImage.classList.add("popup_opened");
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

export function closeOutside(popup, evt) {
  if (evt.target === popup) {
    closePopup(popup);
  }
}

export function closeEsc(evt, popups) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => closePopup(popup));
  }
}

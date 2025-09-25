import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this.popupElement.querySelector(".popup__form");
        this.sumbitButton = this._form.querySelector(".popup__button");
        this._originalButtonText = this.sumbitButton.textContent;
    } 

    setSubmitAction(action){
        this._submitAction = action;
    }

    setLoadingState(isLoading, loadingText = "Guardando..."){
        if(isLoading){
            this._submitButton.textContent = loadingText;
            this._submitButton.disabled = true;
        } else {
            this._submitButton.textContent = this._originalButtonText;
            this.sumbitButton.disabled = false;
        }
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit",(evt) => {
            evt.preventDefault();
            if (this._submitAction) {
                this.setSubmitAction();
            }
        });
    }

    open(){
        super.open();
        this.setLoadingState(false);
    }
}
export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector); // Selecciona el elemento del popup del DOM
  }

  open() {
    this.popupElement.classList.add("popup_opened"); // Agrega la clase 'popup_opened' para mostrar el popup
  }
  close() {
    this.popupElement.classList.remove("popup_opened"); // Elimina la clase 'popup_opened' para ocultar el popup
  }

  _handleClickOutside(evt) {
    // Cerrar al dar click por fuera del Popup
    if (evt.target === this.popupElement) {
      this.close(); // Cierra el popup si el clic fue en el fondo (fuera del contenido)
    }
  }

  _handleEscClose(evt) {
    // Cerrar Popup al presionar "Esc"
    if (evt.key === "Escape") {
      this.close(); // Cierra el popup si se presiona la tecla 'Escape'
    }
  }

  setEventListeners() {
    // Evento para cerrar la ventana
    this.popupElement
      .querySelector(".popup__button_close") // Selecciona el botón de cerrar dentro del popup
      .addEventListener("click", () => {
        this.close(); // Cierra el popup al hacer clic en el botón de cerrar
      });

    this.popupElement.addEventListener("click", (evt) =>
      this._handleClickOutside(evt)
    ); // Añade un escuchador de clic para cerrar al hacer clic fuera del contenido

    document.addEventListener("keydown", (evt) => this._handleEscClose(evt)); // Añade un escuchador de teclado para cerrar con 'Esc'
  }
}

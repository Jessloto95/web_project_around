export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this.nameElement = document.querySelector(nameSelector); // Selecciona el elemento del DOM que muestra el nombre del usuario
    this.aboutElement = document.querySelector(aboutSelector); // Selecciona el elemento del DOM que muestra la información "acerca de" del usuario
    this.avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent, // Obtiene el texto actual del nombre del usuario
      about: this.aboutElement.textContent, // Obtiene el texto actual de la información "acerca de" del usuario
      avatar: this.avatarElement.src,
    };
  }

  setUserInfo(name, about) {
    this.nameElement.textContent = name; // Establece el nuevo nombre del usuario en el elemento del DOM
    this.aboutElement.textContent = about; // Establece la nueva información "acerca de" del usuario en el elemento del DOM
  }

  setAvatar(avatarLink){
    this.avatarElement.src = avatarLink;
  }
}

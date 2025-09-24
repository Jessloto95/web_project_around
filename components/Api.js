class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // Metodo para obtener la informacion del usuario
  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  //Modificar el perfil
  userEdit(name, about) {
    return (
      fetch(`${this.baseUrl}/users/me/`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about,
        })
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
    );
  }

  //Modificar imagen del perfil
  editAvatar() {}

  // Método para obtener las tarjetas iniciales
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Método para agregar una nueva tarjeta
  createCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // Método para eliminar una tarjeta (moved inside the class)
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  //Metodo de me gusta
  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  //Metodo para elominar el me gusta
  removeLikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "990fba54-5d58-4330-94ca-bd5307383afd",
    "Content-Type": "application/json",
  },
});

export { api };

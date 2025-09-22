class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  //Metodo para obtener las tarjetas iniciales
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // otros métodos para trabajar con la API
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "990fba54-5d58-4330-94ca-bd5307383afd",
    "Content-Type": "application/json",
  },
});

export { api };

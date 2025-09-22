// Debe encargarse de agregar las cartas al HTML, ya sean las 6 iniciales o
// cualquier otra carta que agrege el usuario

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items; // Array de datos (por ejemplo, datos de tarjetas)
    this._renderer = renderer; // Función de callback que se encarga de renderizar cada elemento
    this._container = document.querySelector(containerSelector); // Elemento del DOM donde se añadirán los elementos
  }
  renderer() {
    this._items.forEach((item) => {
      this._renderer(item); // Itera sobre los elementos y llama a la función de renderizado para cada uno
    });
  }
  addItem(element) {
    this._container.prepend(element); // Añade un nuevo elemento al principio del contenedor
  }
}

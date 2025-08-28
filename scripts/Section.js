// Debe encargarse de agregar las cartas al HTML, ya sean las 6 iniciales o
// cualquier otra carta que agrege el usuario

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.itemsContainer = document.querySelector(containerSelector);
  }

  renderer() {
    this.items.array.forEach((item) => {
      this.renderer();
    });
  }

  addItem(item) {
    this.itemsContainer.append(item);
  }
}

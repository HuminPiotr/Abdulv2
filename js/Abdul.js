class Abdul {
  constructor() {
    this.number = 1;
    this.length = 12;
  }

  next() {
    if (this.number >= this.length - 1) {
      this.number = 0;
    } else {
      this.number += 1;
    }
    this.show();
  }

  prev() {
    if (this.number <= 0) {
      this.number = this.length;
    } else {
      this.number -= 1;
    }

    this.show();
  }

  rand() {
    const rand = Math.floor(Math.random() * 13);
    if (this.number != rand) {
      this.number = rand;
    } else {
      this.rand();
    }

    this.show();
  }

  show() {
    const fryz = document.querySelector(".fryz");
    fryz.innerHTML = "";

    const img = document.createElement("img");
    img.src = `img/fryz/fryz${this.number}.png`;
    img.classList.add(`fryz${this.number}`);

    fryz.appendChild(img);
  }
}

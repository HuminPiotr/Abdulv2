class Face {
  constructor() {
    this.number = 0;
    this.length = 8;
  }

  next() {
    if (this.number >= this.length) {
      this.number = 0;
    } else {
      this.number += 1;
    }
    console.log(this.number);
    this.show();
  }

  prev() {
    if (this.number <= 0) {
      this.number = this.length;
    } else {
      this.number -= 1;
    }
    console.log(this.number);
    this.show();
  }

  rand() {
    const rand = Math.floor(Math.random() * 9);
    if (this.number != rand) {
      this.number = rand;
    } else {
      this.rand();
    }

    this.show();
  }

  show() {
    const face = document.querySelector(".face");
    face.innerHTML = "";

    const img = document.createElement("img");
    img.src = `img/face/face${this.number}.png`;
    img.classList.add(`face${this.number}`);

    face.appendChild(img);
  }
}

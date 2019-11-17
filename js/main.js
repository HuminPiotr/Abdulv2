const abdul = new Abdul();
const face = new Face();

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randBtn = document.querySelector(".rand");

const prevFaceBtn = document.querySelector(".prevFace");
const nextFaceBtn = document.querySelector(".nextFace");
const randFaceBtn = document.querySelector(".randFace");

prevBtn.addEventListener("click", () => abdul.prev());
nextBtn.addEventListener("click", () => abdul.next());
randBtn.addEventListener("click", () => abdul.rand());

prevFaceBtn.addEventListener("click", () => face.prev());
nextFaceBtn.addEventListener("click", () => face.next());
randFaceBtn.addEventListener("click", () => face.rand());

abdul.show();
face.show();

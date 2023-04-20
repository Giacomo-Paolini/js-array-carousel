let slider = document.getElementById("slider")
const imgElement = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
let currentImage = 0;

const next = document.getElementById("next");
const back = document.getElementById("back");

for (let c = 0; c < imgElement.length; c++) {
    const pathImage = imgElement[c];
    const image = document.createElement("img");
    image.src = pathImage;
    if (c === 0) {
        image.classList.add("slide");
    } 
    else {
        image.classList.add("hidden");
    }
    slider.append(image);
} 

let album = document.querySelectorAll(".carousel > img");
console.log(album)

next.addEventListener("click", function () {
    album[currentImage].classList.remove("slide");
    album[currentImage].classList.add("hidden");

    currentImage++;

    if (currentImage == album.length) {
        currentImage == 0;
    }

    album[currentImage].classList.remove("hidden");
    album[currentImage].classList.add("slide");
})

back.addEventListener("click", function () {
    album[currentImage].classList.remove("slide");
    album[currentImage].classList.add("hidden");
    currentImage--;

    if (currentImage == album.length) {
        currentImage == 0;
    }

    album[currentImage].classList.remove("hidden");
    album[currentImage].classList.add("slide");
})
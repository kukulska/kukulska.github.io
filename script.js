//images in color and BW
const images = {
  tokyo: {
    bw: "./img/Tokyo_BW.jpg",
    color: "./img/Tokyo.jpg",
  },
  muscat: {
    bw: "./img/Muscat_BW.jpg",
    color: "./img/Muscat.jpg",
  },
  hangman: {
    bw: "./img/Hangman_BW.jpg",
    color: "./img/Hangman.jpg",
  },
};

//images change color when they are in the middle of the Viewport

const sections = document.querySelectorAll("section.project");

function changeImageColor() {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;

    const distanceToSection = Math.abs(midViewport - midSection);

    const image = section.querySelector("img");

    if (distanceToSection < section.offsetHeight / 2) {
      let name = image.getAttribute("id");
      image.setAttribute("src", images[name].color);
    } else {
      let name = image.getAttribute("id");
      image.setAttribute("src", images[name].bw);
    }
  });
}

document.addEventListener("scroll", function () {
  changeImageColor();
});

changeImageColor();

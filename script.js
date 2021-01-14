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
  JS4D: {
    bw: "./img/JS4D_BW.jpg",
    color: "./img/JS4D.jpg",
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

//Header color change

const headerTag = document.querySelector("div.header");

function toggleHeader() {
  const pixels = window.pageYOffset;

  if (pixels > 64) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
}

function fadeBox() {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 200, 0.25);

  headerTag.style.boxShadow = ` 0 0 1em rgba(0, 0, 0, ${alpha})`;
}

document.addEventListener("scroll", function () {
  toggleHeader();
  fadeBox();
});

toggleHeader();
fadeBox();

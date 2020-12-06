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

function hover(element) {
  let name = element.getAttribute("id");
  element.setAttribute("src", images[name].color);
}

function unhover(element) {
  let name = element.getAttribute("id");
  element.setAttribute("src", images[name].bw);
}

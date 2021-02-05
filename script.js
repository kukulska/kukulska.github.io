//images change color when they are in the middle of the Viewport

const sections = document.querySelectorAll("section.project");

function changeImageColor() {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;

    const distanceToSection = Math.abs(midViewport - midSection);

    const image = section.querySelector("a img");

    if (distanceToSection < section.offsetHeight / 1.2) {
      image.classList.add("color");
    } else {
      image.classList.remove("color");
      image.classList.add("black-white");
    }
  });
}

document.addEventListener("scroll", function () {
  changeImageColor();
});

changeImageColor();

// when we scroll the page, make a progress bar that track of the distance

const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;

  const percentage = pixels / totalScrollableDistance;

  progressTag.style.width = `${100 * percentage}%`;
});

// Projects descriptions fading in

const animatedTags = document.querySelectorAll(
  "section.project h3, section.project p, div.landing h1, div.landing h2, div.landing ul"
);

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

function fadeIn() {
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
}

document.addEventListener("scroll", function () {
  fadeIn();
});

window.addEventListener("resize", function () {
  fadeIn();
});

fadeIn();

// When arrow is clicked, scroll down to teh first section

const arrow = document.getElementById("arrow");
const sectionDescription = document.getElementById("section-description");

arrow.addEventListener("click", () => {
  sectionDescription.scrollIntoView({ behavior: "smooth" });
});

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

// page tracking scroll progress bar

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

//ring following cursor
const ring = document.getElementById("ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

let speed = 0.08;

function animate() {
  let distanceX = mouseX - ringX;
  let distanceY = mouseY - ringY;

  ringX = ringX + distanceX * speed;
  ringY = ringY + distanceY * speed;

  ring.style.left = ringX + "px";
  ring.style.top = ringY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

// ring changes size on mouse over links

const links = document.querySelectorAll("a, img#arrow");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    ring.classList.add("hovered");
  });

  link.addEventListener("mouseleave", () => {
    ring.classList.remove("hovered");
  });
});

// When arrow is clicked, scroll down to teh first section

const arrow = document.getElementById("arrow");
const sectionDescription = document.getElementById("section-description");

arrow.addEventListener("click", () => {
  sectionDescription.scrollIntoView({ behavior: "smooth" });
});

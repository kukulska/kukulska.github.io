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

    if (distanceToSection < section.offsetHeight / 2) {
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

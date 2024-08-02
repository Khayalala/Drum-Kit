const buttonsArray = document.querySelectorAll(".drum");
const audio1 = new Audio("sounds/tom-1.mp3");
const audio2 = new Audio("sounds/tom-2.mp3");
const audio3 = new Audio("sounds/tom-3.mp3");
const audio4 = new Audio("sounds/tom-4.mp3");
const audio5 = new Audio("sounds/crash.mp3");
const audio6 = new Audio("sounds/kick-bass.mp3");
const audio7 = new Audio("sounds/snare.mp3");

buttonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonInnerHTML = button.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  addAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio1.play();
      break;
    case "a":
      audio2.play();
      break;
    case "s":
      audio3.play();
      break;
    case "d":
      audio4.play();
      break;
    case "c":
      audio5.play();
      break;
    case "j":
      audio6.play();
      break;
    case "k":
      audio7.play();
      break;
    case "l":
      audio2.play();
      break;
  }
}

function addAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

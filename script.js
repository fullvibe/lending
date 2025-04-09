const modal = document.querySelector(".modal");
const homeBtn = document.querySelector(".home__link");
const burger = document.querySelector(".burger");
const headerBtn = document.querySelector(".header__btn");
const closeBtn = document.querySelector(".burger__close");

function openModal() {
  modal.classList.add("modal__open");
}

function closeModal() {
  modal.classList.remove("modal__open");
}
function openBurger() {
  burger.classList.add("burger__open");
}

function closeBurger() {
  burger.classList.remove("burger__open");
}

function closebyOverlay(event) {
  if (event.target == modal) {
    closeModal();
  }
}
if (modal) {
  homeBtn.onclick = openModal;
  modal.onclick = closebyOverlay;
}
headerBtn.onclick = openBurger;
closeBtn.onclick = closeBurger;

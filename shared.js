var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");

var modal = document.querySelector(".modal");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");


var bu


for (i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    
    backdrop.classList.add("open");
  });
}

var closeModal = document.querySelector(".modal__action--negative");
if (closeModal) {
  closeModal.addEventListener("click", close);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  close();
});

function close() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

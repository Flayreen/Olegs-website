const modalBg = document.querySelector(".congratulation");
const modalBtn = document.querySelector(".congratulation__modal__button");

function hideModal(e) {
    e.stopPropagation();
    modalBg.classList.add("congratulation-hidden");
    document.body.style.overflow = "";
}

modalBg.addEventListener("click", hideModal);
modalBtn.addEventListener("click", hideModal);
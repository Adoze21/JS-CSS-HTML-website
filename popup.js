const openPopUpButtons = document.querySelectorAll("[data-pop-up-target]");
const closePopUpButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay');
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close-button]");
const modalOverlay = document.getElementById('overlayModal');
const openModalAdultButtons = document.querySelectorAll("[data-modal-adult-target]");
const closeModalAdultButtons = document.querySelectorAll("[data-modal-adult-close-button]");
const modalAdultOverlay = document.getElementById('overlayModalAdult');
const popUpChooseClose = document.querySelector(".pop-up-close");
const modalChooseClose = document.querySelector(".modal-close");
const modalAdultChooseClose = document.querySelector(".modal-adult-close");



/*Code for kindergarden kids*/
openPopUpButtons.forEach(button=> {
    button.addEventListener("click", () => {
        const popUp = document.querySelector(button.dataset.popUpTarget)
        openPopUp(popUp)
    })
})

overlay.addEventListener("click", () => {
    const popUps = document.querySelectorAll(".pop-up.pop-up-active")
    popUps.forEach(popUp => {
        closePopUp(popUp)
    })
})

popUpChooseClose.addEventListener("click", () => {
    const popUps = document.querySelectorAll(".pop-up.pop-up-active")
    popUps.forEach(popUp => {
        closePopUp(popUp)
    })
})

closePopUpButtons.forEach(button=> {
    button.addEventListener("click", () => {
        const popUp = button.closest(".pop-up")
        closePopUp(popUp)
    })
})

function openPopUp(popUp) {
    if(popUp == null) return
    popUp.classList.add("pop-up-active");
    overlay.classList.add("overlay-active");
}

function closePopUp(popUp) {
    if(popUp == null) return
    popUp.classList.remove("pop-up-active");
    overlay.classList.remove("overlay-active");
}


/*Code for Scholars*/
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

modalOverlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.modal-active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

modalChooseClose.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.modal-active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add("modal-active")
    modalOverlay.classList.add("overlayModal-active")
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove("modal-active")
    modalOverlay.classList.remove("overlayModal-active")
}


/*Code for Adults*/
openModalAdultButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalAdult = document.querySelector(button.dataset.modalAdultTarget)
        openAdultModal(modalAdult)
    })
})

closeModalAdultButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalAdult = button.closest(".modal-adult")
        closeAdultModal(modalAdult)
    })
})

modalAdultOverlay.addEventListener('click', () => {
    const modalAdults = document.querySelectorAll('.modal-adult.modal-adult-active')
    modalAdults.forEach(modalAdult => {
        closeAdultModal(modalAdult)
    })
})

modalAdultChooseClose.addEventListener("click", () => {
    const modalAdults = document.querySelectorAll(".modal-adult.modal-adult-active")
    modalAdults.forEach(modalAdult => {
        closeAdultModal(modalAdult)
    })
})

function openAdultModal(modalAdult){
    if (modalAdult == null) return
    modalAdult.classList.add("modal-adult-active")
    modalAdultOverlay.classList.add("overlayModalAdult-active")
}

function closeAdultModal(modalAdult){
    if (modalAdult == null) return
    modalAdult.classList.remove("modal-adult-active")
    modalAdultOverlay.classList.remove("overlayModalAdult-active")
}
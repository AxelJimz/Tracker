const $tracker__btns = document.querySelectorAll('.tracker__btn')
const $modal = document.querySelector('.modals')
const $modals = document.querySelectorAll('.modal')
const $modal__btns = document.querySelectorAll('.modal__btn')

let visibleModal = false;

const isHiddenModal = (index) => {
    if (visibleModal) {
        visibleModal = false;
        $modal.classList.remove("active")
        $modals[index].classList.remove("active")
        $tracker__btns[index].classList.remove("active")
    }
}

const isVisibleModal = (index) => {
    if (visibleModal === false) {
        visibleModal = true;
        $modal.classList.add("active")
        $modals[index].classList.add("active")
        $tracker__btns[index].classList.add("active")
        $modal__btns[index].addEventListener("click", () => isHiddenModal(index))
    } 
}

$tracker__btns.forEach((tracker__btn, index) => {
    tracker__btn.addEventListener("click", () => isVisibleModal(index))
})



const btn = document.querySelector(".share-btn");
const cardFooter = document.querySelector(".card__footer");
let toggle = false;

const toggleHandler = () => {
    toggle = !toggle
    if (toggle) {
        cardFooter.classList.add('active');
    } else {
        cardFooter.classList.remove('active');
    }
}

btn.addEventListener("click", toggleHandler)
  
  
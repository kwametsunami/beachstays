const modalBox = document.querySelector('.modalContainer')
const body = document.body
const form = document.querySelector('.modalFormHolder')
const showPopup = () => {
    modalBox.style.display = "block";
    body.style.overflow = "hidden";
    const showYourself = console.log("hello!")
}

window.onload = () => { setTimeout(showPopup, 1000) }

const close = document.querySelector('.close').addEventListener('click', function () {
    modalBox.style.display = "none";
    body.style.overflow = "auto";
    console.log("test")
});

form.addEventListener('submit', function (event){
    event.preventDefault();
    const email = document.querySelector('input[name=email').value
    console.log(email)
    if (email) {
        modalBox.style.display = "none";
        body.style.overflow = "auto";
    }
})

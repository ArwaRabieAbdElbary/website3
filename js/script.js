const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

var btnTranslate = document.querySelector('.btn-translate')
function myFunction(){
    alert("Do you want to copy this text?")
}

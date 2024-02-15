const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


var btn = document.querySelector('.btn')
function code() {
    alert("")
    
}
btn.dblClick=code
const form = document.querySelector('form');
const success = document.querySelector('.success');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    form.classList.add('hide');
    success.classList.remove('hide');
})
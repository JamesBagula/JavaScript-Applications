const collapse = document.querySelectorAll('.accordionTop')
const myAccordion = document.querySelector('.accordion');
Array.from(collapse).forEach(function (e) {
    e.addEventListener('click', function (e) {
        myAccordion.style.transition = "all 0.3s";
        const current = e.target.parentElement;
        current.classList.toggle('active');
    })
})
const menuTogglers = document.querySelectorAll('.menu-toggler');
console.log(menuTogglers);

menuTogglers.forEach( (element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('nav__menu-toggler')
    })
})

const array = [1, 2, 3, 4];

array.forEach( )
const toggleMenu = document.querySelector('#ToggleMenu');
const toggleCart = document.querySelector('#ToggleCart');
const navbar = document.querySelector('#Navbar')
const Cart = document.querySelector('#Cart')

const callMenu = () => {
        navbar.classList.toggle('hidden')
}

const callCart = () => {
    Cart.classList.toggle('hidden')
}
toggleCart.addEventListener('click', callCart)
toggleMenu.addEventListener('click', callMenu)
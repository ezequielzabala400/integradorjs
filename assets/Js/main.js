const toggleMenu = document.querySelector('#ToggleMenu');
const toggleCart = document.querySelector('#ToggleCart');
const navbar = document.querySelector('#Navbar');
const Cart = document.querySelector('#Cart');
const slider = document.querySelector('.Hero__Slider');

const callMenu = (e) => {
    console.log(e)
        if(e.target.classList.contains('Header--Bars')){
            navbar.classList.remove('hidden')
            navbar.addEventListener('click', (e) => {
                if(e.target.classList.contains('cross')){
                    navbar.classList.add('hidden')
                }
            })
        }
}

const callCart = () => {
    Cart.classList.toggle('hidden')
}

const heroSlider = () =>{
let img = ["./assets/img/test/1.jpg", "./assets/img/test/2.jpg", "./assets/img/test/3.jpg", "./assets/img/test/4.jpg"];
document.HeroSlider.src = img[3]

let i = 0
const changeImg = () => {
        document.HeroSlider.src = img[i];
        if(i < 3){
            i++
        }else{
            i = 0;
        }
    }
    setInterval(changeImg,1600)
}


function init (){
    window.addEventListener('DOMContentLoaded', heroSlider)
    toggleCart.addEventListener('click', callCart)
    toggleMenu.addEventListener('click', callMenu)
}

init();
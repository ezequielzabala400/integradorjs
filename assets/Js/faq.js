const faqTitles = document.querySelectorAll('.Faq-Section__Title');


const titles = [...faqTitles]


titles.forEach(title =>{
    title.addEventListener('click', e => {
        if(!e.target.classList.contains('Title--Active')){
            title.classList.add('Title--Active')
            const arrow = title.firstElementChild;
            arrow.classList.add('arrow--active')
            const info = title.nextElementSibling;
            info.removeAttribute('hidden')
            return
        } else{
            title.classList.remove('Title--Active')
            const arrow = title.firstElementChild;
            arrow.classList.remove('arrow--active')
            const info = title.nextElementSibling;
            info.setAttribute('hidden', '')
            return
        }
    })
})
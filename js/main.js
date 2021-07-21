import Modal from "bootstrap/js/dist/modal"

new Modal(document.querySelector('#exampleModal'), {
    backdrop: "static"
})

//

import { gsap } from 'gsap'
import Swiper from 'swiper/swiper-bundle.js'

const searchEl = document.querySelector('.search')
const searchIndexEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchIndexEl.focus()
})

searchIndexEl.addEventListener('focus', function () {
    searchEl.classList.add('focused')
    searchIndexEl.setAttribute('placeholder', '제목 또는 방영년월을 검색해보세요!')
})

searchIndexEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused')
    searchIndexEl.setAttribute('placeholder', '')
})

// const effectArr = new Array('fade', 'coverflow', 'flip', 'cube')
// const randomEff = function () {
//     return effectArr[Math.floor(Math.random() * effectArr.length)]
// }

/*new Swiper(선택자, 옵션)*/
new Swiper('.visual .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 8000
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
    }
})



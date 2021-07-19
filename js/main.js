import { gsap } from 'gsap'
import Swiper from 'swiper/bundle'

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

/*login popup layer*/
const signInBtnEl = document.querySelector('.signin-btn .btn')
const signLayerEl = document.querySelector('.signin-layer')
const signLayerCloseEl = document.querySelector('.btn-close')

signInBtnEl.addEventListener('click', function () {
    gsap.to(signLayerEl, .4, {
        display: 'flex',
        opacity: 1
    })
})

signLayerCloseEl.addEventListener('click', function () {
    gsap.to(signLayerEl, .4, {
        display: 'none',
        opacity: 0
    })
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
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next',
    }
})



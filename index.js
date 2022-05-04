"use strict"


const portfolioBox = [...document.querySelectorAll('.section__two--portfolio div')];

const link = ['https://github.com/mfitrie/Natours', 'https://github.com/mfitrie/forkify-web-recipe', 'https://github.com/mfitrie/WaifuApp', 'https://github.com/mfitrie/iSpend', 'https://github.com/mfitrie/Car-Rental-Syetem', 'https://github.com/mfitrie/WebScrapper'];



portfolioBox.forEach((el, i) =>{
    el.addEventListener('click', ()=>{
        window.open(link[i], '_blank');
    })
})



const greetings = document.querySelectorAll('.main__one--animated');

anime({
    targets: greetings,
    translateX: 270
});


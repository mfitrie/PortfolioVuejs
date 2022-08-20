"use strict"


const init = ()=>{
    const portfolioBox = [...document.querySelectorAll('.section__two--portfolio div')];

    const greetings = document.querySelectorAll('.main__one--animated');
    const background__loader = document.querySelector('.background__loader');
    const loader = document.querySelector('.loader');
    
    const menu_icon = document.querySelector('.menu_icon');
    const header = document.querySelector('.header__one');
    
    
    const link = ['https://github.com/mfitrie/Natours', 'https://github.com/mfitrie/forkify-web-recipe', 'https://github.com/mfitrie/WaifuApp', 'https://github.com/mfitrie/iSpend', 'https://github.com/mfitrie/Car-Rental-Syetem', 'https://github.com/mfitrie/WebScrapper'];



    window.addEventListener('DOMContentLoaded', function(e){
        setTimeout(()=>{
            background__loader.style.display = 'none';
            loader.style.display = 'none';
        
            console.log('im ready');
    
            anime({
                targets: greetings,
                translateX: 270
            });
    
        }, 1000);
    });
    
    
    
    menu_icon.addEventListener('click', ()=>{
        header.classList.toggle('header__one--active');
    });
    
    
    header.addEventListener('click', ()=>{
        header.classList.toggle('header__one--active');
    })
    
    
    portfolioBox.forEach((el, i) =>{
        el.addEventListener('click', ()=>{
            window.open(link[i], '_blank');
        })
    })
}


module.exports = init;
// export default init;




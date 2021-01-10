
let btnSalads = document.querySelector('.menu__block .block__group .group__container .group__line .salads'),
    menuSalads = document.querySelector('.block__positions .positions__container .cards__salads'),
    btnSoup = document.querySelector('.menu__block .block__group .group__container .group__line .soup'),
    menuSoup = document.querySelector('.block__positions .positions__container .cards__soup'),
    btnNoodles = document.querySelector('.menu__block .block__group .group__container .group__line .noodles'),
    menuNoodles = document.querySelector('.block__positions .positions__container .cards__noodles'),
    btnDesserts = document.querySelector('.menu__block .block__group .group__container .group__line .desserts'),
    menuDesserts = document.querySelector('.block__positions .positions__container .cards__desserts'),
    btnDrinks = document.querySelector('.menu__block .block__group .group__container .group__line .drinks'),
    menuDrinks = document.querySelector('.block__positions .positions__container .cards__drinks');

btnSalads.addEventListener( 'click', ()=>{
    if(menuSalads.style.display = menuSalads.style.display === 'flex' ? 'none' : 'flex'){
        menuSalads.style.display = 'flex',
        menuSoup.style.display = 'none',
        menuNoodles.style.display = 'none',
        menuDesserts.style.display = 'none',
        menuDrinks.style.display = 'none';
    }
});
btnSoup.addEventListener( 'click', ()=>{
    if(menuSoup.style.display = menuSoup.style.display === 'flex' ? 'none' : 'flex'){
        menuSalads.style.display = 'none',
        menuSoup.style.display = 'flex',
        menuNoodles.style.display = 'none',
        menuDesserts.style.display = 'none',
        menuDrinks.style.display = 'none';
    }
});
btnNoodles.addEventListener( 'click', ()=>{
    if(menuNoodles.style.display = menuNoodles.style.display === 'flex' ? 'none' : 'flex'){
        menuSalads.style.display = 'none',
        menuSoup.style.display = 'none',
        menuNoodles.style.display = 'flex',
        menuDesserts.style.display = 'none',
        menuDrinks.style.display = 'none';
    }
});
btnDesserts.addEventListener( 'click', ()=>{
    if(menuDesserts.style.display = menuDesserts.style.display === 'flex' ? 'none' : 'flex'){
        menuSalads.style.display = 'none',
        menuSoup.style.display = 'none',
        menuNoodles.style.display = 'none',
        menuDesserts.style.display = 'flex',
        menuDrinks.style.display = 'none';
    }
});
btnDrinks.addEventListener( 'click', ()=>{
    if(menuDrinks.style.display = menuDrinks.style.display === 'flex' ? 'none' : 'flex'){
        menuSalads.style.display = 'none',
        menuSoup.style.display = 'none',
        menuNoodles.style.display = 'none',
        menuDesserts.style.display = 'none',
        menuDrinks.style.display = 'flex';
    }
});
/**
btnSalads.addEventListener( 'click', ()=>{
    menuSalads.style.display = menuSalads.style.display === 'flex' ? 'none' : 'flex';
    if(menuSalads.style.display === 'flex'){
        menuSoup.style.display = 'none'
    };
});
btnSoup.addEventListener( 'click', ()=>{
    menuSoup.style.display = menuSoup.style.display === 'flex' ? 'none' : 'flex';
});
btnNoodles.addEventListener( 'click', ()=>{
    menuNoodles.style.display = menuNoodles.style.display === 'flex' ? 'none' : 'flex';
});
btnDesserts.addEventListener( 'click', ()=>{
    menuDesserts.style.display = menuDesserts.style.display === 'flex' ? 'none' : 'flex';
});
btnDrinks.addEventListener( 'click', ()=>{
    menuDrinks.style.display = menuDrinks.style.display === 'flex' ? 'none' : 'flex';
});
**/
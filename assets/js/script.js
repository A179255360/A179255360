"use strict";
let menu = document.getElementById('maCarte');
let blocafk = document.getElementById('prankDark');


const plats = [ // tableau en json pour savoir si oui ou non il y aura un back gray et avec linfos title , desc
    { 
        confirm: true,
        imgSrc: "./assets/img/img-01.jpg",
        title:"un super titre",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in dolore voluptas fuga 
        explicabo veritatis aspernatur eaque laboriosam iure voluptate odit deserunt unde dolores nobis, 
        itaque voluptatum cum porro quasi.`
    },
    {
        confirm: false,
        imgSrc: "./assets/img/img-02.jpg",
        title:"un super titre",
        text:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in dolore voluptas fuga 
        explicabo veritatis aspernatur eaque laboriosam iure voluptate odit deserunt unde dolores nobis, 
        itaque voluptatum cum porro quasi.`
    }, {
        confirm: true,
        imgSrc: "./assets/img/img-03.jpg",
        title:"un super titre",
        text:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in dolore voluptas fuga 
        explicabo veritatis aspernatur eaque laboriosam iure voluptate odit deserunt unde dolores nobis, 
        itaque voluptatum cum porro quasi.`
    },
    {
        confirm: false,
        imgSrc: "./assets/img/img-04.jpg",
        title:"un super titre",
        text:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in dolore voluptas fuga 
        explicabo veritatis aspernatur eaque laboriosam iure voluptate odit deserunt unde dolores nobis, 
        itaque voluptatum cum porro quasi.`
    },
    {
        confirm: true,
        imgSrc: "./assets/img/img-05.jpg",
        title:"un super titre",
        text:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in dolore voluptas fuga 
        explicabo veritatis aspernatur eaque laboriosam iure voluptate odit deserunt unde dolores nobis, 
        itaque voluptatum cum porro quasi.`
    }
];



    
    for(const element of plats){

        if(element.confirm){
            menu.innerHTML +=
            `<article class="backCARTE artCARTE">
            <div class="container">
                <img class="imgCARTE" src="${element.imgSrc}" alt="presentation de plat">
                </div>
                    <h3 class="titreArtCARTE">${element.title}</h3>
                    <p class="descArtCarte">${element.text}</p>
            </article>
            <div class="clear"></div>`;
        }else{
            
            menu.innerHTML +=
            `<article class="artCARTE">
            <div class="container">
                <img class="imgCARTE" src="${element.imgSrc}" alt="presentation de plat">
                </div>
                    <h3 class="titreArtCARTE">${element.title}</h3>
                    <p class="descArtCarte">${element.text}</p>
            </article>
            <div class="clear"></div>`;
        }

        
    }
// au click ça active une page qui est en zIndex 999 pour bloquer tous accés 
document.querySelector('.darkmode').addEventListener('click', function(){
    blocafk.style.display = "flex";
}); 
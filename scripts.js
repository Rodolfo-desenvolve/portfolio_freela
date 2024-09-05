// efeito slide //

const btnNext = document.getElementById('nextSlide')
const btnPrevious = document.getElementById('previousSlide')
const slider = document.querySelector('.slider')
const context = document.querySelector('.context')

btnNext.addEventListener('click', controlslide)
btnPrevious.addEventListener('click', controlslide)

const { width: slidewidth } = window.getComputedStyle(slider)
const { width: contextwidth } = window.getComputedStyle(context)

let currentSlide = 0;

const slideProps = {
    width: parseInt(slidewidth),
    scroll: 0,
}

function setCurrentDot(){
    const dots = document.querySelectorAll('.dot')
    for(let dot of dots){
        dot.classList.remove('current')
    }
    dots[currentSlide].classList.add('current')
}

function controlslide({ target: { id } }){
    const contextlenght = context.children.length;
    switch (id) {
        case 'nextSlide':
            if(slideProps.scroll + slideProps.width < parseInt(contextwidth)){
            slideProps.scroll += slideProps.width;
        }
        if(currentSlide < contextlenght  - 1){
            currentSlide += 1;
            setCurrentDot()
        }
        return slider.scrollLeft = slideProps.scroll;

        case 'previousSlide':{
            if(currentSlide > 0){
                currentSlide -= 1;
                setCurrentDot()
            }
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            return slider.scrollLeft = slideProps.scroll;
        }
        default:
            break;
    }
}

window.onload = () => {
    const contextlenght = context.children.length;
    for(let index = 0; index < contextlenght - 1; index += 1){
        const newdot = slider.parentElement.querySelector('.dot').cloneNode()
        slider.parentElement.querySelector('.length-dots').appendChild(newdot)
    }
    setCurrentDot();
}

// efeito carrossel //

const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')
const imgs2 = document.getElementById('img2')
const img2 = document.querySelectorAll('#img2 img')
const imgs3 = document.getElementById('img3')
const img3 = document.querySelectorAll('#img3 img')
const imgs4 = document.getElementById('img4')
const img4 = document.querySelectorAll('#img4 img')

let idx = 0;
let idx2 = 0;
let idx3 = 0;
let idx4 = 0;

function carrossel(){
    idx++;
    idx2++;
    idx3++;
    idx4++;


    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform =  `translateX(${-idx * 280}px)`

    if(idx2 > img2.length - 1){
        idx2 = 0;
    }

    imgs2.style.transform =  `translateX(${-idx2 * 280}px)`

    if(idx3 > img3.length - 1){
        idx3 = 0;
    }

    imgs3.style.transform =  `translateX(${-idx3 * 280}px)`

    if(idx4 > img4.length - 1){
        idx4 = 0;
    }

    imgs4.style.transform =  `translateX(${-idx4 * 280}px)`
}

setInterval(carrossel, 1500)

// efeito de rolagem de tela//

const elemScroll = document.querySelector('#rolagem');
const elemContainer = elemScroll.querySelector('.rolagem-items');
let elemFilho =  Array.from(elemContainer.children);

elemFilho.forEach(item =>{
    let elemDuplicado = item.cloneNode(true);
    elemContainer.appendChild(elemDuplicado);
})




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

// efeito slide baixo //

const btnNext1 = document.getElementById('nextSlide-1')
const btnPrevious1 = document.getElementById('previousSlide-1')
const slider2 = document.querySelector('.slider2')
const context2 = document.querySelector('.context2')

btnNext1.addEventListener('click', controlslide2)
btnPrevious1.addEventListener('click', controlslide2)

const { width: slide2width } = window.getComputedStyle(slider2)
const { width: context2width } = window.getComputedStyle(context2)

let currentSlide2 = 0;

const slideProps2 = {
    width: parseInt(slide2width),
    scroll: 0,
}

function controlslide2({ target: { id } }){
    const context2lenght = context2.children.length;
    switch (id) {
        case 'nextSlide-1':
            if(slideProps2.scroll + slideProps2.width < parseInt(context2width)){
            slideProps2.scroll += slideProps2.width;
        }
        if(currentSlide2 < context2lenght  - 1){
            currentSlide2 += 1;
        }
        return slider2.scrollLeft = slideProps2.scroll;

        case 'previousSlide-1':{
            if(currentSlide2 > 0){
                currentSlide2 -= 1;
            }
            slideProps2.scroll = slideProps2.scroll - slideProps2.width < 0 ? 0 : slideProps2.scroll - slideProps2.width;
            return slider2.scrollLeft = slideProps2.scroll;
        }
        default:
            break;
    }
}

// efeito carrossel top //

const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')
const imgs3 = document.getElementById('img3')
const img3 = document.querySelectorAll('#img3 img')
const imgs4 = document.getElementById('img4')
const img4 = document.querySelectorAll('#img4 img')
const imgs5 = document.getElementById('img5')
const img5 = document.querySelectorAll('#img5 img')

let idx = 0;
let idx3 = 0;
let idx4 = 0;
let idx5 = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 310}px)`

    idx3++;
    

    if(idx3 > img3.length - 1){
        idx3 = 0;
    }

    idx4++;
    imgs3.style.transform =  `translateX(${-idx3 * 310}px)`

    if(idx4 > img4.length - 1){
        idx4 = 0;
    }

    idx5++;
    imgs4.style.transform =  `translateX(${-idx4 * 310}px)`

    if(idx5 > img5.length - 1){
        idx5 = 0;
    }

    imgs5.style.transform =  `translateX(${-idx5 * 310}px)`
}

setInterval(carrossel, 1500)

// efeito carrossel baixo //

const imgs6 = document.getElementById('img6')
const img6 = document.querySelectorAll('#img6 img')
const imgs8 = document.getElementById('img8')
const img8 = document.querySelectorAll('#img8 img')
const imgs9 = document.getElementById('img9')
const img9 = document.querySelectorAll('#img9 img')
const imgs10 = document.getElementById('img10')
const img10 = document.querySelectorAll('#img10 img')

let idx6 = 0;
let idx8 = 0;
let idx9 = 0;
let idx10 = 0;

function carrossel2(){
    idx6++;
    idx8++;
    idx9++;
    idx10++;

    if(idx6 > img6.length - 1){
        idx6 = 0;
    }

    imgs6.style.transform =  `translateX(${-idx6 * 310}px)`

    if(idx8 > img8.length - 1){
        idx8 = 0;
    }

    imgs8.style.transform =  `translateX(${-idx8 * 310}px)`

    if(idx9 > img9.length - 1){
        idx9 = 0;
    }

    imgs9.style.transform =  `translateX(${-idx9 * 310}px)`

    if(idx10 > img10.length - 1){
        idx10 = 0;
    }

    imgs10.style.transform =  `translateX(${-idx10 * 310}px)`
}

setInterval(carrossel2, 2000)



// efeito de rolagem de tela//

const elemScroll = document.querySelector('#rolagem');
const elemContainer = elemScroll.querySelector('.rolagem-items');
let elemFilho =  Array.from(elemContainer.children);

elemFilho.forEach(item =>{
    let elemDuplicado = item.cloneNode(true);
    elemContainer.appendChild(elemDuplicado);
})


// efeito de bottão mostrar mais //

function leiaMais(){
    let icon = document.getElementById('icon')
    let title1 = document.getElementById('title1')
    let morebutton = document.getElementById('more-botton')

    if(morebutton.innerHTML == '<i class="fa-solid fa-chevron-up"></i>'){
        title1.style.color = '#00E80E';
        morebutton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        icon.style.color = '#00E80E';
        morebutton.style.color = '#00E80E';
        icon.style.border = '2px solid #fff';
    }else{
        title1.style.color = '#fff';
        morebutton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        icon.style.color = '#fff';
        morebutton.style.color = '#fff';
        icon.style.border = '2px solid #fff';
    }
}

function leiaMais1(){
    let title2 = document.getElementById('title2')
    let icon1 = document.getElementById('icon1')
    let morebutton1 = document.getElementById('more-botton1')

    if(morebutton1.innerHTML == '<i class="fa-solid fa-chevron-up"></i>'){
        title2.style.color = '#00E80E';
        morebutton1.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        morebutton1.style.color = '#00E80E';
        icon1.style.color = '#00E80E';
        icon1.style.border = '2px solid #fff';
    }else{
        title2.style.color = '#fff'
        morebutton1.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        morebutton1.style.color = '#fff'
        icon1.style.color = '#fff';
        
        icon1.style.border = '2px solid #fff';
    }
}

function leiaMais2(){
    let icon2 = document.getElementById('icon2')
    let title3 = document.getElementById('title3')
    let morebutton2 = document.getElementById('more-botton2')

    if(morebutton2.innerHTML == '<i class="fa-solid fa-chevron-up"></i>'){
        title3.style.color = '#00E80E'
        morebutton2.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        morebutton2.style.color = '#00E80E';
        icon2.style.color = '#00E80E';
        
        icon2.style.border = '2px solid #fff';
    }else{
        title3.style.color = '#fff'
        morebutton2.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        morebutton2.style.color = '#fff';
        icon2.style.color = '#fff';
        
        icon2.style.border = '2px solid #fff';
    }
}

// efeito de abertuda de ler mais //

function ShowHide(id){
    let conteudo = document.querySelector(id)
    conteudo.classList.toggle('ativo');

    if(conteudo.id == 'mais'){
        leiaMais()
    }if(conteudo.id == 'mais1'){
        leiaMais1()
    }if(conteudo.id == 'mais2'){
        leiaMais2()
    }
}



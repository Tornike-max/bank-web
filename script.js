let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//navigation
let nav = document.querySelector('.navigation');
let header = document.querySelector('.header');

//buttons
let btnCloseModal = document.querySelector('.btn--close-modal');
let btnShowModal = document.querySelector('.btn--show-modal');
let btnScrollTo = document.querySelector('.btn--scroll-to');
let btnNavs = document.querySelector('.nav__link');

//sections
let section1 = document.querySelector('#section--1')
let section2 = document.querySelector('#section--2')
let section3 = document.querySelector('#section--3')

// tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//sections
const allSection = document.querySelectorAll('.section');


// sign up modal
let openModal = function(e){
    e.preventDefault();
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

let closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

btnShowModal.addEventListener('click',openModal);

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        closeModal()
    }
})


// learn more scroll
btnScrollTo.addEventListener('click', function(e){
    section1.scrollIntoView({behavior: "smooth"})
})


//nav links scroll
document.querySelector('.nav-tags').addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"})
    }
})


//nav link hovers
const handleHover = function(e){
    console.log(this)
    if(e.target.classList.contains('nav__link')){
        let link = e.target;
        let siblings = link.closest('.navigation').querySelectorAll('.nav__link');
        let logo = link.closest('.navigation').querySelector('.logo')
        
        siblings.forEach(el=>{
            if(el !== link) 
            el.style.opacity = this;
            logo.style.opacity = this;
        });
        
        console.log(link)
    }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

const viewportMargin = nav.getBoundingClientRect().height
console.log(viewportMargin)


const stickyNav = function(entries){
     const [entry] = entries

     if(!entry.isIntersecting) 
     nav.classList.add('fixed')
     else nav.classList.remove('fixed')
}

const headerObserver = new IntersectionObserver
(stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: `-${viewportMargin}px`,
})


headerObserver.observe(header)


//all sections
const revealSection = function(entries,observer){
    const [entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver
(revealSection,{
    root:null,
    threshold: 0.1,
})

allSection.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
    
})


// active tab
tabsContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) return
    tabs.forEach(tab=> tab.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active')

    //remove active content
    tabsContent.forEach(content=> content.classList.remove('operations__content--active'))
    //add active content
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

});



const slides = document.querySelectorAll('.slide')
let btnLeft = document.querySelector('.slider__btn--left')
let btnRight = document.querySelector('.slider__btn--right')
const dots = document.querySelector('.dots');
let curSlide = 0;
let maxSlide = slides.length;


const dotsSlide = function(){
    slides.forEach(function(_,i){
        dots.insertAdjacentHTML('beforeend',
           `<button class="dot" data-slide="${i}"></button>`
        );
    });
};
dotsSlide()

let goToSlide = function(slide){
    slides.forEach((s,i)=> (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}
goToSlide(0)

const nextSlide = function(){
    if(curSlide === maxSlide - 1){
        curSlide = 0;
    }else{
        curSlide++;
    }
    goToSlide(curSlide); 
}

const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide - 1
    }else{
        curSlide--;
    }
    goToSlide(curSlide);
}

btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowLeft'){
        prevSlide()
    }else if(e.key === 'ArrowRight'){
        nextSlide()
    }
})






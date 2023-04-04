let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//navigation
let nav = document.querySelector('.navigation');

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


//
btnScrollTo.addEventListener('click', function(e){
    // let s1scroll = section1.getBoundingClientRect();
    // console.log(s1scroll)
    // console.log(e.target.getBoundingClientRect())

    // window.scrollTo(
    //     s1scroll.left + window.pageXOffset,
    //     s1scroll.top + window.pageYOffset
    // )

//     window.scrollTo({
//        left: s1scroll.left + window.pageXOffset,
//        top: s1scroll.top + window.pageYOffset,
//        behavior: 'smooth'
// })
// scrollIntoView({behavior:'smooth'}) მოქმედებს ზუსტად ისე, როგორც ზემოთა მაგალითი.უბრალოდ აქ ჩვენ არ გვჭირდება ყველაფრის გამოტანა
    section1.scrollIntoView({behavior: "smooth"})
})


document.querySelector('.nav-tags').addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"})
    }
})

nav.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('nav__link')){
        let link = e.target;
        let siblings = link.closest('.navigation').querySelector('.nav__link');
        let logo = link.closest('.navigation').querySelector('.navigation')
        
        siblings.forEach(el=>{
            if(el !== link) el.style.opacity = 0.5
            
        });
        logo.style.opacity = 0.5
        console.log(link)
    }
})

nav.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('nav__link')){
        let link = e.target;
        let siblings = link.closest('.navigation').querySelector('.nav__link');
        let logo = link.closest('.navigation').querySelector('.navigation')
        
        siblings.forEach(el=>{
            if(el !== link) el.style.opacity = 1
            
        });
        logo.style.opacity = 1
        console.log(link)
    }
})


// active tab
tabsContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) return
    tabs.forEach(tab=> tab.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active')

    // content
    //remove active content
    tabsContent.forEach(content=> content.classList.remove('operations__content--active'))
    //add active content
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})








// navigation
//  document.querySelectorAll('.nav__link')- ით ვირჩევთ ნავიგაციის თითოეულ ელემენტს. ეს გვიბრუნებს node list-ს რაზეც შეგვიძლია გამოვიყენოთ 
// forEach() მეთოდი. ვიყენებთ ამ მეთოდს და callBack ფუნციას გადავცემთ რომელსაც პარამეტრად ვაძლევთ el-ს. ეს el- ამიერიდან არის თითოეული 
// არჩეული ელემენტი. პარამეტრს el-ზე ვიყენებთ addEventListener და ვეუბნებით რომ დაკლიკებაზე უნდა გამოიძახოს ფუნქცია, რომელიც შექმნის
// id ცვლადს და ეს ცვლადი this.getAttribute('href')-ით მისწვდება ჰტმლ დოკუმენტში თითოეულ nav__link-ზე გადაცემულ href ატრიბუტს.
// ამით ჩვენ გავიგებთ კონკრეტლად რომელ ელემენტს ვაკლიკებთ. შემდეგ document.querySelector(id)-ით ვირჩევთ id-ს რომელსაც თითოეული ელემენტი გამოაქვს
// და ამ id-ზე ვიყენებთ scrollIntoView({behavior: "smooth"})- მეთოდს, რომელიც ლამაზად და ნელა გადაიტანს იმ კონკრეტულ ადგილას, რომელსაც ჩვენ დავაკლიკებთ.
// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.preventDefault();
//         console.log('link')
//         const id = this.getAttribute('href');
//         console.log(id)
//         document.querySelector(id).scrollIntoView({behavior: "smooth"})
//     })
// })


// h1-ს html-ში ჰყავს ორი შვილი ელემენტი, ჩვენ ამ ელემენტებს შეგვიძლია მივწვდეთ ისე როგორც ქვემოთ გავაკეთე. firstElementChild-ით მანიპულაციებს გავაკეთებთ პირველ ელემენტზე
// ხოლო lastElementChild -ით ბოლო ელემენტზე
// const h1 = document.querySelector('h1');
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange'

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// //closest მეთოდი არის querySelector-ვით.განსხვავება ის არის რომ  closest ეძებს მშობლებს.
// h1.closest('.header').style.backgroundColor = 'red';

// // აქ ჩვენ ვეყბენბთ, რომ h1-ელემენტის მშობელი მაინტერესებს და ამ მშობელის ყველა შვილზე მინდა რომ ლუპი მოხდეს და თუ el იდენტურია h1-ის 
// // მაშინ  დამილოგოს siblings-i
// [...h1.parentElement.children].forEach(function(el){
//     if(el === h1) {
//         console.log('siblibgs')
//     }
// })

// const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//     this.style.backgroundColor = randomColor()
//     console.log('link', e.target)
//     console.log(e.target === this)
// },true)

// document.querySelector('.nav-tags').addEventListener('click', function(e){
//     this.style.backgroundColor = randomColor()
//     console.log('tags', e.target)
// })

// document.querySelector('.navigation').addEventListener('click', function(e){
//     this.style.backgroundColor = randomColor()
//     console.log('container', e.target)
// })



// let h1 = document.querySelector('h1');

//mouseenter და onmouseenter აკეტებს ზუსტად ერთი და იგივე ივენთს რასაც css-შო აკეთებს hover effect-ი
// ასევე შეგვიძლია eventhandler-ის მხოლოდ ერთხელ გამოყენება removeEventListener -მეთოდის გამოყენებით
//შეგვიძლია  ასევე გამოვიყენოთ setTimeOut function-ი
// let allertH1 = function(e){
//     alert('get the fuck out of here...');

//     // h1.removeEventListener('mouseenter',allertH1)
// }

// setTimeout(()=> h1.removeEventListener('mouseenter',allertH1),5000)
    
// h1.addEventListener('mouseenter',allertH1 )

// h1.addEventListener('mouseenter',function(){
//     alert('get the fuck out of here')

// })

// h1.onmouseenter = function(e){
//         alert('get the fuck out of here')
// }











//pageYOffset is an integer 
//that represents the number of pixels between the top of the 
//document and the top of the visible area of the browser window.
//For example, if a web page is 1000 pixels tall and the user has 
//scrolled down 200 pixels, the value of pageYOffset would be 200.
// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// console.log('on top',scrollTop);

// let allSelection = document.querySelectorAll('section');
// console.log(allSelection)

// // შეგვიძლია ტაგ namebit ავირჩიოთ ყველა ელემენტი-'document.getElementsByTagName'
// let allButtons = document.getElementsByTagName('button')
// console.log(allButtons)


// let header = document.querySelector('.header')


// let message = document.createElement('div');
// message.classList.add('cookie');
// message.style.width = '100%'
// message.innerHTML = `we use cookies just for annoying you. 
// <button class=
//  "btn btn--close-cookie">Got it!
// </button>`
// //prepend ამატებს html ში პირველ ადგილზე
// // header.prepend(message)

// //append ამატებს ბოლო ელემენტად ჰტმლში
// // header.prepend(message)
// //იმის მიუხედავად რომ მხოლოდ ერთ ადგილას გვაქ უფლება, რომ გამოვიყენოთ ერთი და იგივე ჰტმლ ელემენტი,მაინც არსებობს
// //სხვა გზა და ეს გზა არის 'header.append(message.cloneNode(true))' აქ ჩვენ შეგვიძლია გამოვიყენოთ ორ ადგილას
// // header.append(message.cloneNode(true))

// //არსებობს before da after; romlebic magalitad headeris tavshi gamoitans cookies an tundac boloshi,swored amashi gvexmareba before da afteri
// // header.before(message); //es gamoitans headeris tavshi
// header.after(message); //es gamoitans headeris boloshi
// console.log(getComputedStyle(message).color) 
// console.log(getComputedStyle(message).height)
// message.style.height = Number.parseInt(getComputedStyle(message).height,10) + 20 + 'px'

// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//     message.remove()
// })

// let logo = document.querySelector('.logo');
// logo.setAttribute('company', 'Ozbot')
// logo.setAttribute('designer','ozbeta')
// console.log(logo.getAttribute('company'))

// let link = document.querySelector('.nav__link--btn');
// console.log(link.href,'am konkretul momentshi ki linki mogvaq')
// console.log(link.getAttribute('href'),'am metodit chven mogvaqvs kokretulad rac aqvs mititebuli href atriburts')

// // data atributes
// console.log(logo.dataset.versionNumber, 'აუცილებლად უნდა იწყებოდეს data-თი ჰტმლში')

// //classes
// logo.classList.add('t') //მიამატებს კლასს არსებულ კლასზე 
// logo.classList.remove('t') //ამოიღბს კლასს
// logo.classList.toggle('t') //ნახავს არის თუ არა t კლასი და თუ არის მაშინ არ დაამატებს და თუ არ არის მაშინ დაამატებს
// logo.classList.contains('t') //ნახავს შეიცავს თ არა კლასი t-ს

// // არ უნდა გამოვიყენოთ ეს რადგან ეს ზემოდან გადააწერს არსებულ კლასს და ძველი კლასი აღარ
// // logo.className = 't'
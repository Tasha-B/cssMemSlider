const slider = document.querySelector('#slider');
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');

let index = 0;

const activeSlide = n => {
for (item of slides){
    item.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeBtn = n => {
    for (item of btns){
        item.classList.remove('active');
        }
        btns[n].classList.add('active');
    }

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeBtn(index);
    } else {
        index++;
        activeSlide(index);
        activeBtn(index);
    }   
}

const prevtSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeBtn(index);
    } else {
        index--;
        activeSlide(index);
        activeBtn(index);
    }   
}

btns.forEach((item, indexBtn) => {
    item.addEventListener('click', () => {
        index = indexBtn;
        activeSlide(index);
        activeBtn(index);
    })
})

// btns.addEventListener('click', nextSlide);

// showMemes(memeIndex);

// function addMeme(n) {
//     showMemes(memeIndex += n);
// }

// function currentSlide(n) {
//     showMemes(memeIndex = n);
// }

// function showMemes(n) {
//     let i;
// if (n > sliderItems.length) {
//     memeIndex = 1;
// } 
// if (n < 1) {
//     memeIndex = sliderItems.length; 
// }

// for (i = 0; i < sliderItems.length; i++) {
//     sliderItems[i].style.display = 'none';
// }
// for (let i = 0; i < btns.length; i++) {
//     btns[i].className = btns[i].className.replace('active', "");
// }

// sliderItems[memeIndex - 1].style.display = 'block';
// btns[i].className += 'active';
// }

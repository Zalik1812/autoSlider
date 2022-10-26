const slide1 = document.querySelector('.slide__1');
const slide2 = document.querySelector('.slide__2');
const slide3 = document.querySelector('.slide__3');

function replaceSlide1(){
    slide1.style.left = '0';
    slide2.style.left = '100%';
    slide3.style.left = '-100%';
    slide1.style.transition = 'all 3s ease';
    slide2.style.transition = 'all 3s ease';
    slide3.style.transition = 'none';
    setTimeout(replaceSlide2, 5000);
}
function replaceSlide2(){
    slide3.style.left = '0';
    slide1.style.left = '100%';
    slide2.style.left = '-100%';
    slide3.style.transition = 'all 3s ease';
    slide1.style.transition = 'all 3s ease';
    slide2.style.transition = 'none';
    setTimeout(replaceSlide3, 5000);
}
function replaceSlide3(){
    slide3.style.left = '100%';
    slide2.style.left = '0';
    slide1.style.left = '-100%';
    slide1.style.transition = 'none';
    slide2.style.transition = 'all 3s ease';
    slide3.style.transition = 'all 3s ease';
    setTimeout(replaceSlide1, 5000)
}
setTimeout(replaceSlide1, 5000)
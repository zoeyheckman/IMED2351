const closedFace = document.querySelector('.closed'}
const openFace = document.querySelector('.open')
closedFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
    }
})
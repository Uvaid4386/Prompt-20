const body = document.querySelectorAll('body');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    document.querySelector('.popup').style.display = 'flex'
});

document.querySelector('.popup').addEventListener('click',()=>{
    document.querySelector('.popup').style.display = 'none'
});


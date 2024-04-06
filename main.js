const monkes = document.querySelectorAll('img');
const popup = document.querySelector('.popup');

popup.addEventListener('click', () => {
    popup.classList.add('hidden');
})


monkes.forEach((el) => {
    el.addEventListener('click', () => {
        popup.classList.remove('hidden');
        console.log('monke click');
    })
})

document.querySelector('.mail').addEventListener('click', function() {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.contact').classList.add('blur');
})

document.querySelector('span.hide').addEventListener('click', function() {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.contact').classList.remove('blur');
})


// 'Submit':
const allInput = document.querySelectorAll('input');
const text = document.querySelector('textarea');

document.querySelector('.submit').addEventListener('click', ()=> {
    allInput.forEach(input=> input.value = "");
    text.value = "";
})

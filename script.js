const menuEl = document.querySelector('.menu');
const returnEl = document.querySelector('.return');
const navEl = document.querySelector('.nav');

menuEl.addEventListener('click', () => {
	navEl.style.display = 'block';
});
returnEl.addEventListener('click', () => {
	navEl.style.display = 'none';
});

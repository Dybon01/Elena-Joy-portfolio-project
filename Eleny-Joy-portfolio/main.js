const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');

const burgerFunction = () => {
	nav.classList.toggle('nav-open');
	burger.classList.toggle('toggle');
};

burger.addEventListener('click', burgerFunction);

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle('nav-open');
		burger.classList.toggle('toggle');
	});
});

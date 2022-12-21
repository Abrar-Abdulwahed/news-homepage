const openBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

openBtn.addEventListener('click', () => {
	openBtn.classList.toggle('open');
	openBtn.classList.toggle('relative');
	openBtn.classList.toggle('fixed');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});

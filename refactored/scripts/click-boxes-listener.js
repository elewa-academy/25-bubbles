const divs = document.querySelectorAll('div');

divs.forEach(div => div.addEventListener('click', show_bubbling,  {
	capture: false,
	once: true
}));

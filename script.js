let button = document.querySelector('button')
let page = document.querySelector('.page')

button.onclick = function(){
	page.classList.toggle('dark-theme')
	page.classList.toggle('light-theme')
	button.classList.toggle('dark-theme')
	button.classList.toggle('light-theme')
}

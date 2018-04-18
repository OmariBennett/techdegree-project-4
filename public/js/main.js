	'use strict';
document.addEventListener('DOMContentLoaded', function() {
	const boardDiv = document.querySelector('.board'),
		  h1 = document.querySelector('h1'),
		  boxes = document.querySelector('.boxes'),
		  header = document.querySelector('header');

	//Hide the board
	const playersIcon = h1.nextElementSibling;

	playersIcon.style.display = 'none';

	//Start page HTML
	const startPageHTML = document.createElement("div"),
		  startBtn = document.createElement("a");
		  // p1 = document.createElement("a");

	//Start page HTML attributes;
	startPageHTML.setAttribute('class', 'screen screen-start'),
	startPageHTML.setAttribute('id', 'start');

	startBtn.setAttribute('href', '#'),
	startBtn.setAttribute('class', 'button'),
	startBtn.innerHTML = "Start game";

	// p1.setAttribute('id', 'p1_Vs_COM');
	// p1.setAttribute('href', '#'),
	// p1.setAttribute('class', 'button')
	// p1.innerHTML = 'P1 v.s. COM';

	//Start page HTML setup
	boardDiv.insertBefore(startPageHTML, boxes);
	startPageHTML.appendChild(header);
	// p1.appendChild(header);
	header.insertBefore(startBtn, playersIcon);
	// header.insertBefore(p1, playersIcon);

	//Start Game
	startBtn.addEventListener('click', ()=> {
		//Hide the title screen and start button
		startPageHTML.removeAttribute('class');
		startBtn.remove();
		// p1.remove();
		playersIcon.style.display = 'block';
	});

	// p1.addEventListener('click', (e)=> {
	// 	console.log(e.target);
	// 	//Hide the title screen and start button
	// 	startPageHTML.removeAttribute('class');
	// 	startBtn.remove();
	// 	p1.remove();
	// 	playersIcon.style.display = 'block';
	// });

}, false);
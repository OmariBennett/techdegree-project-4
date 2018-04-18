'use strict';
!function() {
	var turn = 1;
	var	count = 1;
	let playerNum = `player${turn}`;
	let player = document.querySelector(`#${playerNum}`);


	const boxes = document.querySelector('.boxes'),
		  max = boxes.children.length,
		  i = 0,
		  isChecked = false;

	//Board grid location r = row & c = column **starting from upper left box
	const Row_1Col_1 = boxes.children[0],
		  Row_1Col_2 = boxes.children[1],
		  Row_1Col_3 = boxes.children[2],
		  //2nd colmn
		  Row_2Col_1 = boxes.children[3],
		  Row_2Col_2 = boxes.children[4],
		  Row_2Col_3 = boxes.children[5],
		  //3rd colmn
		  Row_3Col_1 = boxes.children[6],
		  Row_3Col_2 = boxes.children[7],
		  Row_3Col_3 = boxes.children[8];

	function checkBoard( count, turn, status, boxOne, boxTwo, boxThree, num ) {
		if( turn === 1 && boxOne.className === status &&
			boxTwo.className === status &&
			boxThree.className === status ) {
				console.log(`Player${turn} wins!`);
				newGame(turn, count);
				return count = 1;
		}
	}

	function newGame( turn , count ) {
		const boardDiv = document.querySelector('.board'),
			  h1 = document.querySelector('h1'),
			  boxes = document.querySelector('.boxes'),
			  header = document.querySelector('header');

		//Hide the board
		const playersIcon = h1.nextElementSibling;

		playersIcon.style.display = 'none';

		//Start page HTML
		const winnerHTML = document.querySelector("#start"),
			  newGameBtn = document.createElement("a"),
			  winner = document.createElement('p');

		//Start page HTML attributes;
		if( 1 === turn && count < 10 ) {
			winnerHTML.setAttribute('class', 'screen screen-win screen-win-one');
			winner.innerHTML = "Winner";
		} else if( 2 === turn && count < 10 ) {
			winnerHTML.setAttribute('class', 'screen screen-win screen-win-two');
			winner.innerHTML = "Winner";
		} else if( count === 10 ) {
			winnerHTML.setAttribute('class', 'screen screen-win screen-win-tie');
			winner.innerHTML = "It's a Tie!";
		}
					
		winnerHTML.setAttribute('id', 'finish');

		newGameBtn.setAttribute('href', '#'),
		newGameBtn.setAttribute('class', 'button'),

		newGameBtn.innerHTML = "New game";

		winner.setAttribute('class', "message"),

		//Start page HTML setup
		boardDiv.insertBefore(winnerHTML, boxes);
		winnerHTML.appendChild(header);
		header.insertBefore(winner, playersIcon);
		header.insertBefore(newGameBtn, playersIcon);

		//Start Game
		newGameBtn.addEventListener('click', ()=> {
			//Hide the title screen and start button
			winnerHTML.removeAttribute('class');
			winnerHTML.setAttribute('id', 'start');
			newGameBtn.remove();
			playersIcon.style.display = 'block';
			winner.remove();

			for(let i = 0; i < boxes.children.length; i++ ) {
				boxes.children[i].setAttribute('class', 'box');
			}

			document.querySelector('#player1').setAttribute('class', 'players active');

			//Set player 2 attribute 
			document.querySelector('#player2').setAttribute('class', 'players');

			// location.reload(true);
		});
	}

	//Set players attribute 
	player.setAttribute('class', 'players active');

	//Show player image when hovering over the boxes
	for(let i = 0; i < boxes.children.length; i++ ) {
		boxes.children[i].addEventListener('mouseenter', (e)=> {
			if( e.target.className === 'box' && turn === 1 ) {
				e.target.className = 'box p1';
			} else if( e.target.className === 'box' && turn === 2 ) {
				e.target.className = 'box p2';
			}
		});

		//Hide the player image
		boxes.children[i].addEventListener('mouseleave', (e)=> {
			if( e.target.className === 'box p1' ||  e.target.className === 'box p2') {
				e.target.className = 'box';
			}
		});
	}

	boxes.addEventListener('click', (e)=> {
		if( e.target.className === 'box p1' ) {
			//Check player turn status
			if( turn === 1 ) {
				//Set player 2 attribute 
				document.querySelector('#player2').setAttribute('class', 'players active');

				//Set player 1 attribute 
				document.querySelector('#player1').setAttribute('class', 'players');
				
				e.target.className = 'box p1 box-filled-1';

				// //Check the top row game status
				if( turn === 1 && Row_1Col_1.className === 'box p1 box-filled-1' &&
					Row_1Col_2.className === 'box p1 box-filled-1' &&
					Row_1Col_3.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}

				//Check the 2nd row game status
				if( turn === 1 && Row_2Col_1.className === 'box p1 box-filled-1' &&
					Row_2Col_2.className === 'box p1 box-filled-1' &&
					Row_2Col_3.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}
				
				//Check the 3rd row game status
				if( turn === 1 && Row_3Col_1.className === 'box p1 box-filled-1' &&
					Row_3Col_2.className === 'box p1 box-filled-1' &&
					Row_3Col_3.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}

				//Check the 1st colmn game status
				if( turn === 1 && Row_1Col_1.className === 'box p1 box-filled-1' &&
					Row_2Col_1.className === 'box p1 box-filled-1' &&
					Row_3Col_1.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}

				//Check the 2nd colmn game status
				if( turn === 1 && Row_1Col_2.className === 'box p1 box-filled-1' &&
					Row_2Col_2.className === 'box p1 box-filled-1' &&
					Row_3Col_2.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						return count = 1;
				}
				
				//Check the 3rd colmn game status
				if( turn === 1 && Row_2Col_3.className === 'box p1 box-filled-1' &&
					Row_2Col_3.className === 'box p1 box-filled-1' &&
					Row_3Col_3.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}

				//Check the diagonal game status
				if( turn === 1 && Row_1Col_1.className === 'box p1 box-filled-1' &&
					Row_2Col_2.className === 'box p1 box-filled-1' &&
					Row_3Col_3.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}
				
				//Check the 2nd diagonal game status
				if( turn === 1 && Row_1Col_3.className === 'box p1 box-filled-1' &&
					Row_2Col_2.className === 'box p1 box-filled-1' &&
					Row_3Col_1.className === 'box p1 box-filled-1' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						return count = 1;
				}

				//Player One turn
				turn++;
				
				count++;

				if(count === 10) {
					newGame( turn , count );
					count = 1;
					return turn = 1;
				}
			}

				//Set player 2 attribute 
		} else if( e.target.className === 'box p2' ) {
			//Check player turn status
			if( turn === 2 ) {
				document.querySelector('#player1').setAttribute('class', 'players active');

				//Set player 1 attribute 
				document.querySelector('#player2').setAttribute('class', 'players');

				e.target.className = 'box p2 box-filled-2';

				// //Check the top row game status
				if( turn === 2 && Row_1Col_1.className === 'box p2 box-filled-2' &&
					Row_1Col_2.className === 'box p2 box-filled-2' &&
					Row_1Col_3.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}

				//Check the 2nd row game status
				if( turn === 2 && Row_2Col_1.className === 'box p2 box-filled-2' &&
					Row_2Col_2.className === 'box p2 box-filled-2' &&
					Row_2Col_3.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}
				
				//Check the 3rd row game status
				if( turn === 2 && Row_3Col_1.className === 'box p2 box-filled-2' &&
					Row_3Col_2.className === 'box p2 box-filled-2' &&
					Row_3Col_3.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
					// console.log(count);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}

				//Check the 1st colmn game status
				if( turn === 2 && Row_1Col_1.className === 'box p2 box-filled-2' &&
					Row_2Col_1.className === 'box p2 box-filled-2' &&
					Row_3Col_1.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}

				//Check the 2nd colmn game status
				if( turn === 2 && Row_1Col_2.className === 'box p2 box-filled-2' &&
					Row_2Col_2.className === 'box p2 box-filled-2' &&
					Row_3Col_2.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}
				
				//Check the 3rd colmn game status
				if( turn === 2 && Row_2Col_3.className === 'box p2 box-filled-2' &&
					Row_2Col_3.className === 'box p2 box-filled-2' &&
					Row_3Col_3.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}

				//Check the diagonal game status
				if( turn === 2 && Row_1Col_1.className === 'box p2 box-filled-2' &&
					Row_2Col_2.className === 'box p2 box-filled-2' &&
					Row_3Col_3.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}
				
				//Check the 2nd diagonal game status
				if( turn === 2 && Row_1Col_3.className === 'box p2 box-filled-2' &&
					Row_2Col_2.className === 'box p2 box-filled-2' &&
					Row_3Col_1.className === 'box p2 box-filled-2' ) {
						console.log(`Player${turn} wins!`);
						newGame(turn, count);
						turn = 1;
						return count = 1;
				}

				//Player One turn
				turn--;

				count++;
				}
			}
		
	});

}();
(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/

	const instructions = document.getElementById('instructions');
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
    // const showimage = document.getElementById('showimage');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
    const exitbutton = document.getElementById('exit');

    exitbutton.addEventListener('click', function(event){
        event.preventDefault();
        instructions.className = 'hidden'
        gameControl.className = 'showing'

    })

	const gameData = {
		// dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
		// 	   'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        dice: ['images/boba1.png', 'images/boba2.png', 'images/boba3.png', 
			   'images/boba4.png', 'images/boba5.png', 'images/boba6.png'],

        // dice: ['images/boba1_1.png', 'images/boba2_1.png', 'images/boba3_1.png', 
		// 	   'images/boba4_1.png', 'images/boba5_1.png', 'images/boba6_1.png'],
		players: ['Player 1', 'Player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};

	startGame.addEventListener('click', function () {

        instructions.className = 'hidden';
        startGame.className = 'hidden';
        game.className = 'showing';
        actionArea.className = 'showing';
        score.className = 'showing';
        
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);

		// gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<h2></h2>';
        
		gameControl.innerHTML += '<button id="quit">Quit</button>';

		document
			.getElementById('quit').addEventListener('click', function () {
				location.reload();
			});

		setUpTurn();
        
	});

	function setUpTurn() {
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener('click', function(){

			throwDice();

		});
	}

	function throwDice(){
		actionArea.innerHTML = '';
        
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;






		// game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
		// 					<img src="${gameData.dice[gameData.roll2-1]}">`;

        // game.innerHTML += `<div id="showimage"><img src="${gameData.dice[gameData.roll1-1]}"> 
		// 					<img src="${gameData.dice[gameData.roll2-1]}"></div>`;


        // showimage.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
		// 					<img src="${gameData.dice[gameData.roll2-1]}">`;

        
		



		gameData.rollSum = gameData.roll1 + gameData.roll2;

		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
            // setTimeout(setUpTurn, 0);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
            // setTimeout(setUpTurn, 0);
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			checkWinningCondition();
		}

        game.innerHTML += `<div id="showimage"><img src="${gameData.dice[gameData.roll1-1]}"> 






							<img src="${gameData.dice[gameData.roll2-1]}"></div>`;
	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			// score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			// wins with ${gameData.score[gameData.index]} points!</h2>`;

            // score.innerHTML = `<h2>Scoreboard</h2> <p style=" font-family: 'Abhaya Libre', serif; font-size:30px; font-weight: 500; line-height:1.5em">${gameData.players[gameData.index]} 
			// wins with ${gameData.score[gameData.index]} points!</p>`;

            score.innerHTML = `<p style=" font-family: 'Abhaya Libre', serif; font-size:30px; font-weight: 500; line-height:1.5em">${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</p>`;



			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		// score.innerHTML = `<h2>Scoreboard</h2><p>The score is currently <strong>${gameData.players[0]}
		// ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} 
		// ${gameData.score[1]}</strong></p>`;

        // score.innerHTML = `<h2>Scoreboard</h2>
        // <div id ="playerscore">
        //     <div>
        //         ${gameData.players[0]}<br>
        //         <br>
        //         ${gameData.score[0]}
        //     </div>

        //     <div>
        //         ${gameData.players[1]}<br>
        //         <br>
        //         ${gameData.score[1]}
        //     </div>
        // </div>
        
        // `;
        
        score.innerHTML = `
        <div id ="playerscore">
            <div>
                ${gameData.players[0]}<br>
                <br>
                ${gameData.score[0]}
            </div>

            <div>
                ${gameData.players[1]}<br>
                <br>
                ${gameData.score[1]}
            </div>
        </div>
        
        `;
        
	}
}());
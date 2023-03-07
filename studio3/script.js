(function(){
	
	"use strict";
	console.log("reading js");

	//variables
	const instructions = document.getElementById('instructions');
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
    const exitbutton = document.getElementById('exit');

	//audio
	const audio = new Audio('sound/buttonclick.mp3');
    const audio2 = new Audio('sound/cafesound.mp3');
	
    

	//exit button
    exitbutton.addEventListener('click', function(event){
        event.preventDefault();
        instructions.className = 'hidden'
        gameControl.className = 'showing'
		audio.play();
        
		
    })

	//images of my boba for each turn 
	const gameData = {
        dice: ['images/boba1.png', 'images/boba2.png', 'images/boba3.png', 
			   'images/boba4.png', 'images/boba5.png', 'images/boba6.png'],


		//variables
		panda: ['Panda 1', 'Panda 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};


	//start the game 
	startGame.addEventListener('click', function () {
		audio.play();
        audio2.play();
        

        instructions.className = 'hidden';
        startGame.className = 'hidden';
        game.className = 'showing';
        actionArea.className = 'showing';
        score.className = 'showing';
        
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);
        gameControl.innerHTML = '<h2></h2>';
        
		gameControl.innerHTML += '<button id="quit">Quit</button>';

		//quit button
		document.getElementById('quit').addEventListener('click', function () {
			
			
			location.reload();
            
			
			});

			audio.play();
		setUpTurn();
		
        
	});

	//set up the turn 
	function setUpTurn() {
		
		game.innerHTML = `<p>${gameData.panda[gameData.index]} pick your boba</p>`;
		actionArea.innerHTML = '<button id="roll">Pick Boba</button>';
		document.getElementById('roll').addEventListener('click', function(){

			audio.play();
			throwDice();

		});
	}


	//pick boba
	function throwDice(){
		actionArea.innerHTML = '';
		
        
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>${gameData.panda[gameData.index]} pick your boba</p>`;

        
		



		gameData.rollSum = gameData.roll1 + gameData.roll2;

		// if two 1's are picked...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your drinks only has one boba, switching to  ${
				gameData.panda[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
		}

		// if neither boba is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Pick Again</button> <button id="pass">Pass</button>';

			//pick again  and click buttons
			document.getElementById('rollagain').addEventListener('click', function () {
				audio.play();
				throwDice();
			});

			//pass and pick buttons
			document.getElementById('pass').addEventListener('click', function () {
				audio.play();
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			//make sure the winning condition 
			checkWinningCondition();
		}

        game.innerHTML += `<div id="showimage"><img src="${gameData.dice[gameData.roll1-1]}"> 
		<img src="${gameData.dice[gameData.roll2-1]}"></div>`;
	}

    //check the winning condition and if they won, show win message
	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			
            score.innerHTML = `
			<div id ="playerscore">
            <div>
				<img src="images/panda.png" alt="pandas"><br>
                ${gameData.panda[0]}<br>
                <br>
                ${gameData.score[0]}
            </div>

			<div>
                    <h1>Panda's Boba Shop</h1>
                </div>

            <div>
				<img src="images/panda.png" alt="pandas"><br>
                ${gameData.panda[1]}<br>
                <br>
                ${gameData.score[1]}
            </div>
        </div>
		
		<p style=" margin-top:0; font-family: 'Abhaya Libre', serif; font-size:30px; font-weight: 500; line-height:1.5em">${gameData.panda[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</p>`;
			// showCurrentScore();
			game.innerHTML = '';
			
			



			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

    //scoreboard
	function showCurrentScore() {
        
        score.innerHTML = `
        <div id ="playerscore">
            <div>
				<img src="images/panda.png" alt="pandas"><br>
                ${gameData.panda[0]}<br>
                <br>
                ${gameData.score[0]}
            </div>

			<div>
                    <h1>Panda's Boba Shop</h1>
                </div>

            <div>
				<img src="images/panda.png" alt="pandas"><br>
                ${gameData.panda[1]}<br>
                <br>
                ${gameData.score[1]}
            </div>
        </div>
		`;
        
	}
}());
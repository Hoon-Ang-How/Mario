let currMoleTile;
let currPlantTile
let currShellTile;
let score = 0;
let gameOver = false;
let start = false;

const myInterval = setInterval(setMole,1100); 
const herInterval = setInterval(setPlant,1100);

function setGame(){
	
	if (start == false){
		document.getElementById("board").innerHTML = "";
		
		for (let i=0; i<9;i++){
		let tile = document.createElement("div");
		tile.id = i.toString(); //<div id="0-8"></div>
		tile.addEventListener("click",selectTile);
		document.getElementById("board").appendChild(tile);		
		}
	
		start = true;
		
	}
	
	else if (start == true){
		return;
	}
			
}

function myStop() {
	clearInterval (myInterval);
	clearInterval (herInterval);
}


function getRandomTile(){
	/*math.random --> (0-1)*9 = (0-9 not able to reach 9)----->round down to (0-8)integers*/
	let num = Math.floor(Math.random()*9);
	return num.toString();
}

function setMole(){

	if (currMoleTile){
		currMoleTile.innerHTML = "";
	}	
	
	let mole = document.createElement("img");
	mole.src = "./greeny.png";
	
	let num = getRandomTile();
	if (currPlantTile && currPlantTile.id == num){
	return;
	}
	if (currShellTile && currShellTile.id == num){
		return;
	}
	currMoleTile = document.getElementById(num);
	currMoleTile.appendChild(mole);
}
	
function setPlant(){
	
	if (currPlantTile){
		currPlantTile.innerHTML = "";
	}
	
	let plant = document.createElement("img");
	plant.src = "./shell.png";
	
	let num = getRandomTile();
	if (currMoleTile && currMoleTile.id == num){
		return;
	}
	if (currShellTile && currShellTile.id == num){
		return;
	}
	currPlantTile = document.getElementById(num);
	currPlantTile.appendChild(plant);
}

function playSong(){
		document.querySelector('.js-song').innerHTML = `<audio autoplay=""src="./Main.mp3"></audio><audio autoplay=""src="./dear.mp3"></audio>`;
}
	
function selectTile(){
	
	if (this == currMoleTile){
		score += 10;
		document.getElementById("score").innerText = score.toString();
		
		if (score >=100){
			setInterval(setShell,2000);	
		}
		
		if (score == 200){
			document.getElementById("score").innerText = "Thank you Mario: " + score.toString();
			document.getElementById("board").innerHTML = `<img src = "./eyes.gif">`;
			document.querySelector('.js-song').innerHTML = `<audio autoplay=""src="./Stage.mp3"></audio><audio autoplay=""src="./thank.mp3"></audio>`;
			score = 0;
			myStop ();
			gameOver = true;
			document.querySelector('.js-play').innerHTML ="";
			}	
	}
	
	else if (this == currPlantTile || this == currShellTile){
		document.getElementById("score").innerHTML = "GAME OVER: " + score.toString();
		document.getElementById("board").innerHTML = `<img src = "./mama.gif">`;
		document.querySelector('.js-song').innerHTML = `<audio autoplay=""src="./Die.mp3"></audio>`;
		score = 0;
		myStop();
		gameOver = true;
		document.querySelector('.js-play').innerHTML = "";
		
	}
	
}

function setShell(){
	
	if (gameOver == true){
	return;
	}
	
	if (currShellTile){
		currShellTile.innerHTML = "";
	}
	
	let shell = document.createElement("img");
	shell.src = "./thorn.png";
	
	let num = getRandomTile();
	if (currMoleTile && currMoleTile.id == num){
		return;
	}
	if (currPlantTile && currPlantTile.id == num){
	return;
	}
	currShellTile = document.getElementById(num);
	currShellTile.appendChild(shell);
}



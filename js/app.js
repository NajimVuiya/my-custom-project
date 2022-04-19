'use strict';
// Btn elem Select
const startBtn = document.querySelector('#submitBtnElm');
const p1BtnElm = document.querySelector('#p1BtnElm');
const p2BtnElm = document.querySelector('#p2BtnElm');
const startBtnElm = document.querySelector('#startNow');
// Visiualizaing elem
const winColorElm = document.querySelector('#winColorElm');
const player1Elm = document.querySelector('#player1Elm');
const player2Elm = document.querySelector('#player2Elm');
const succesMesElm = document.querySelector('#succesMesElm');
let tetsint = document.querySelector('.my-continer');

const WinColorStor = ['#76b900','#1428a0','#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'];
const player1ColorStor = ['#76b900','#1428a0','#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'];
const player2ColorStor = ['#76b900','#1428a0','#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'];

// default disable p1 and p2
function defaultDisabledP1andP2()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.setAttribute('disabled','disabled');
}
defaultDisabledP1andP2();

// success audio 
let successAudio = new Audio;
successAudio.src = 'audio/happy.mp3';

// when clicking the button 
// default values
let winColorValues = null;
let player1ColorValues = null;
let player2ColorValues = null;
let turn  = 'player1';

// random color generate start here
function randomWinColor(winColorRandom)
{
	return Math.ceil(Math.random() * WinColorStor.length)
}
// player one random color generate
function randPlayer1Color(player1ColorRandom)
{
	return Math.ceil(Math.random() * player1ColorStor.length);
}
// player two random color generate
function randPlayer2Color(player2ColorRandom)
{
	return Math.ceil(Math.random() * player2ColorStor.length);
}

// start button start here 
const SelectAudio = new Audio();
SelectAudio.src = 'audio/soda-fizz-1.wav';
startBtn.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	// renerate win random color 
	randomColorGeneration();
	// start button disabled
	startBtnDisabled();
	// disabled p1 and p2
	disabledP1andP2()
	// audio start here
	SelectAudio.play();
});

function disabledP1andP2()
{
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');
}

function randomColorGeneration()
{
	 winColorValues = winColorElm.style.backgroundColor = WinColorStor[randomWinColor(WinColorStor)];
}
function startBtnDisabled()
{
	startBtn.setAttribute('disabled','disabled');
}
// start button end here 

// player1 button start here
const player1Audio = new Audio;
player1Audio.src = 'audio/bottle-open-1.wav';
p1BtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	// player1 disabled and player2 inabled
	player1DisabledAndPlayer2Inabled();
	// audio start here 
	player1Audio.play();
});

function player1DisabledAndPlayer2Inabled()
{
	if(turn === 'player1')
	{
		// renerate player1 random color 
		generatePlayer1RandomColor();
		turn = 'player2';
	}
}
function generatePlayer1RandomColor()
{
	player1ColorValues = player1Elm.style.backgroundColor = player1ColorStor[randPlayer1Color(player1ColorStor)];
	let getResult = successMessage();
	// after successing the game then two button will be diabled
	if(!getResult)
	{
		p1DisabledP2inabled();

	}
}


function p1DisabledP2inabled()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.removeAttribute('disabled');
}

// success message start here 
function successMessage()
{
	let isP1Success = winColorValues === player1ColorValues;
	let isP2Success = winColorValues === player2ColorValues;
	let winMessage = false;
	if(isP1Success)
	{
		winMessage = 'Player 1 is success';
		succesMesElm.innerHTML = winMessage;
		succesMesElm.style.color = winColorValues;
		successAudio.play();
	}else if(isP2Success){
		winMessage = 'Player 2 is success';
		succesMesElm.innerHTML = winMessage;
		succesMesElm.style.color = winColorValues;
		successAudio.play();
	}
	resetFun(isP1Success,isP2Success);
	return winMessage;
}

function resetFun(player1Reset,player2Reset)
{
	if(player1Reset || player2Reset)
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.setAttribute('disabled','disabled');
	}
}


// player2 button start here
const player2Audio = new Audio;
player2Audio.src = 'audio/bottle-open-1.wav';
p2BtnElm.addEventListener('click', (evt) => 
{
	evt.preventDefault();
	// player2 disabled and player1 inabled
	player2DisabledAndPlayer1Inabled();
	//player 2 audio start here
	player2Audio.play();
});

function player2DisabledAndPlayer1Inabled()
{
	if(turn === 'player2')
	{
		// renerate player2 random color 
		generatePlayer2RandomColor();
		turn = 'player1'
	}
}
function generatePlayer2RandomColor()
{
	player2ColorValues = player2Elm.style.backgroundColor = player2ColorStor[randPlayer2Color(player2ColorStor)];
	let getResult = successMessage();
	if(!getResult)
	{
		p2DisableP1Inabled();
		
	}
}

function p2DisableP1Inabled()
{
	p2BtnElm.setAttribute('disabled','disabled');
	p1BtnElm.removeAttribute('disabled');
}

// start button element
const startGameAudio = new Audio;
startGameAudio.src = 'audio/soda-fizz-2.wav';
startBtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	winColorValues = winColorElm.style.backgroundColor = '';
	player1ColorValues = player1Elm.style.backgroundColor = '';
	player2ColorValues = player2Elm.style.backgroundColor = '';

	startBtn.removeAttribute('disabled');
	defaultDisabledP1andP2();

	succesMesElm.innerHTML = '';
	// start game sound 
	startGameAudio.play();
});

// document.body.style.backgroundImage = "url('image/boy.gif')";

// let result = document.querySelector('#successEmoji');

// tetsint.insertAdjancentHTML('afterend',result.style.backgroundImage = "url('image/boy.gif')");




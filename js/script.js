'use strict';


(function()
{
	// button select start here
const submitBtnElm = document.querySelector('#submitBtnElm');
const p1BtnElm = document.querySelector('#p1BtnElm');
const p2BtnElm = document.querySelector('#p2BtnElm');
const formElm = document.querySelector('form');

// color box start here
const WinSelectColor = document.querySelector('#WinSelectColor');
const player1Elm = document.querySelector('#player1Elm');
const player2Elm = document.querySelector('#player2Elm');

// working with extra variable
let turn = 'player-1';
// color store here
let winColors = ['#76b900','#1428a0'/*,'#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'*/];
let p1Color = ['#76b900','#1428a0'/*,'#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'*/];
let p2Color = ['#76b900','#1428a0'/*,'#00704a','#1769ff','#e34f26','#1680c0','#ea4c89','#0077c0','#333333','#00aeef','#092e20','#7ac142','#6cc655','#107c10','#f26522'*/];

let storeWinColors = [];
let storePlayer1Colors = [];
let storePlayer2Colors = [];
// success message's function 
function successMessageShowing(WinColors,player1Colors,player2Colors)
{
	
	WinColors.forEach((value1,index1,accu1) => 
	{
		storeWinColors.push(value1);
	});
	player1Colors.forEach((p1Value,p1Index,p1Accu) => 
	{
		storePlayer1Colors.push(p1Value);
	});
	player2Colors.forEach((p2Value,p2Index,p2Accu) => 
	{
		storePlayer2Colors.push(p2Value);
	});

	player2BTN(storeWinColors,storePlayer1Colors);
	
}
// player 2 success  message start here 
function player2BTN(storeWinColors,storePlayer2Colors)
{
	let p2Win = storeWinColors.includes(...storePlayer2Colors);
	p2SuccessMess(p2Win);
}
function p2SuccessMess(p2Win)
{
	if(p2Win)
	{
		console.log('Player2 is successfully Metch');
		return;
	}else{
		console.log('No body metch');
	}
}
// player2 success message end here

// player1 success message start here
function player1BTN(storeWinColors,storePlayer1Colors)
{
	let p1Win = storeWinColors.includes(...storePlayer1Colors);
	// p1SuccessMess
	p1SuccessMess(p1Win);
}
function p1SuccessMess(p1Win)
{
	if(p1Win)
	{
		console.log('Player1 is successfully Metch');
		return;
	}
}
// player1 success message end here

/*
function checkingForKnowingArr(color1,color2,color3)
{
	let color1Store = [];
	let color2Store = [];
	let color3Store = [];

	// arrays's color 1 start here
	color1.forEach((value1,index1,accu1) => 
	{
		color1Store.push(value1);
	});
	
	// array's color 2 start here
	color2.forEach((value2,index2,accu2) => 
	{
		color2Store.push(value2);
	});
	// array's color 3 start here
	color3.forEach((value3,index3,accu3) => 
	{
		color3Store.push(value3);
	})

	let firstResult = color1Store.includes(...color2Store);
	let secondResult = color1Store.includes(...color3Store);

	if(firstResult)
	{
		console.log('Player-1 is winner ');
		return;
	}else if(secondResult){
		console.log('Player-2 is winner ');
		return;
	}else{
		console.log('No body winner');
	}

}
checkingForKnowingArr(['#76b900','#000000'],['#909','#00704a','#1769ff'],['#76b900','#ea4c89','#0077c0']);
*/





// random function start here
function randomsfun(max)
{
	return Math.floor(Math.random() * winColors.length);
}
function player1Color(p1Max)
{
	return Math.floor(Math.random() * p1Color.length);
}
function player2Color(p2Max)
{
	return Math.floor(Math.random() * p2Color.length);
}

// initialization start here
submitBtnElm.addEventListener('click', (evt) => 
{
	evt.preventDefault();
	setWinColor();
	// Select only one color to compition with 2 player
	selectColor();
	// afterClickStartBtn2WillBeInabled
	afterClickStartBtn2WillBeInabled();
	// Success message swing
	/* 
	storeWinColors = [];
	storePlayer1Colors = [];
	successMessageShowing(winColors,p1Color,p2Color);
*/
});

function afterClickStartBtn2WillBeInabled()
{
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');
}

function selectColor()
{
	submitBtnElm.setAttribute('disabled','disabled');
}
function setWinColor()
{
	WinSelectColor.style.backgroundColor = winColors[randomsfun(winColors)];
}
// player one start here
p1BtnElm.addEventListener('click', (evt) => 
{
	evt.preventDefault(); 
	// checking condition and doing btn1 inabled and disabled
	conditionCheckingPlyer1();
	player1BTN(storeWinColors,storePlayer1Colors);

});
function conditionCheckingPlyer1()
{
	if(turn === 'player-1')
	{
		player1SetColor();
		// player-1 disabled
		disabledAndInabledPlayer1();
		turn = 'player-2';
	}
}

function disabledAndInabledPlayer1()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.removeAttribute('disabled');
}

function defaultDisabled()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.setAttribute('disabled','disabled');
}
defaultDisabled();

function player1SetColor()
{
	player1Elm.style.backgroundColor = p1Color[player1Color(p1Color)];
}
// player two start here
p2BtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault(); 
	// checking condition and doing btn1 inabled and disabled
	conditionCheckingPlyer2();
	// success message
	/*
	storeWinColors = [];
	storePlayer2Colors = [];
	*/ 
	player2BTN(storeWinColors,storePlayer2Colors);

});
function conditionCheckingPlyer2()
{
	if(turn === 'player-2')
	{
		player2SetColor();
		// player-2 disabled
		disabledAndInabledPlayer2();
		turn = 'player-1';
	}
}
function disabledAndInabledPlayer2()
{
	p2BtnElm.setAttribute('disabled','disabled');
	p1BtnElm.removeAttribute('disabled');
}
function player2SetColor()
{
	player2Elm.style.backgroundColor = p2Color[player2Color(p2Color)];
}



/*
function testingArr(arr1,arr2,arr3)
{
	console.log(arr1);
	console.log(arr1.length);
	console.log(arr1[1]);

	console.log('---------------');
	console.log(arr2);
	console.log(arr2.length);
	console.log(arr2[1]);

	arr1.forEach((value,index,accu) => 
	{
		if(value)
		{
			console.log('That is true');
		}
	})

}
testingArr(['Kamal miah','Roya akter'],['Bangladesh','Pakistan'],['Irak','Kasem solaimany']);

function processRecords(records)
{
	if(records.length === 0)
	{
		console.log(`No records to process`);
		return;
	}

	records.forEach(recod =>
	{
		console.log(`The record is : ${recod}`);
	});
}

processRecords(['foo', 'bar','baz']);
processRecords([]);

// another Example is that 
function processRecords2(recods)
{
	if(!recods.length)
	{
		console.log('No recods to process');
		return;
	}
	recods.forEach(recod => 
	{
		console.log(`This is `)
	})
}	
processRecords2(['Robya akter','Tajin akter','Mahmuda akter']);
*/ 

})

//  audio function start here with javaScript 
const button2Elm = document.querySelector('#likeBtnElm');
const submitBtnElm = document.querySelector('#submitBtnElm');
const p1BtnElm = document.querySelector('#p1BtnElm');
const p2BtnElm = document.querySelector('#p2BtnElm');
const startNowElm = document.querySelector('#startNow');

const getAudio = new Audio();
getAudio.src = 'audio/soda-fizz-2.wav';
button2Elm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	getAudio.play();
});

const getSubmitAudio = new Audio;
getSubmitAudio.src = 'audio/soda-fizz-1.wav';
submitBtnElm.addEventListener('click', (evt) => 
{
	evt.preventDefault();
	getSubmitAudio.play();
});

const getP1Audio = new Audio;
getP1Audio.src = 'audio/bottle-open-1.wav';
p1BtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	getP1Audio.play();
});

// another sound set
const getP2Audio = new Audio();
getP2Audio.src = 'audio/bottle-open-1.wav';
p2BtnElm.addEventListener('click',(evt) =>
{
	evt.preventDefault();
	getP2Audio.play()
});

const startAudio = new Audio();
startAudio.src = 'audio/soda-fizz-2.wav';
startNowElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	startAudio.play();
})();;

const test = document.querySelector('#succesMesElm');



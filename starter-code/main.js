console.log("JS file is connected to HTML! Woo!");

var cardOne= "queen";
var cardTwo= "king";
var cardThree= "queen";
var cardFour= "king";

/*if(cardTwo === cardFour){
	alert('You found a match!');
}
else if(cardOne === cardThree){

	alert('You found a match!');
}
else{

	alert('Sorry, try again.');
}*/



var createCards = function(){

	var gameBoard = document.getElementById('game-board');

		for(var i = 0; i < 4; i++){

			var cards = document.createElement('div');

			cards.className = 'card';

			gameBoard.appendChild(cards);

		}




};

createCards();








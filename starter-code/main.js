console.log("JS file is connected to HTML! Woo!");

var cardOne= "queen";
var cardTwo= "king";
var cardThree= "queen";
var cardFour= "king";
var attempt = 0;
var itsGood= 0;
var queenCounter = 0;
var kingCounter = 0;


document.getElementById('reset').addEventListener('click', function(){

	document.querySelector('.scoreBoard').innerHTML = "Score: ";
	for(var i = 0; i < cards.length; i++){

		document.getElementsByClassName('card')[i].innerHTML = "";

    }
  		queenCounter=0;
    	kingCounter=0;
    	itsGood=0;
    	attempt = 0;
    	cardsInPlay = [];
    	document.querySelector('.match').innerHTML = "";
    	createBoard();

});

var createCards = function(){

	var gameBoard = document.getElementById('game-board');

		for(var i = 0; i < 4; i++){

			var cardElement = document.createElement('div');

			cardElement.className = 'card';

			gameBoard.appendChild(cardElement);

		}




};

createCards();

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var randomNumber;



var createBoard = function(){
  
  

	for(var i = 0; i < cards.length; i++){
      
      randomNumber = Math.floor(Math.random() * (4 - 0)) + 0;
      console.log(randomNumber);

			if((randomNumber === 0 || randomNumber ===1) && queenCounter <2){

              document.getElementsByClassName('card')[i].setAttribute('data-card', cards[randomNumber]);
              queenCounter++;
            }else if((randomNumber === 2 || randomNumber ===3) && kingCounter <2){

              document.getElementsByClassName('card')[i].setAttribute('data-card', cards[randomNumber]);
              kingCounter++;
            }else if((randomNumber === 0 || randomNumber ===1) && queenCounter ===2){
              document.getElementsByClassName('card')[i].setAttribute('data-card', cards[2]);
              kingCounter++;
              
            }else if((randomNumber === 2 || randomNumber ===3) && kingCounter ===2){
              
              document.getElementsByClassName('card')[i].setAttribute('data-card', cards[0]);
              queenCounter++;
            }
	
		document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);


	}


};





var isMatch = function(array){


		if(array[0] === array[1]){

			
			document.querySelector('.match').innerHTML = "Cards Match!";
			attempt++;
          	setTimeout(resetGame, 3000);
          
		}else{

			
        	document.querySelector('.match').innerHTML = "Cards Don't Match!";
        	attempt++;
        	setTimeout(resetDeck, 3000);

        }
  
    	
  
    
          
};

var resetDeck = function(){
  
   for(var i = 0; i < cards.length; i++){

		document.getElementsByClassName('card')[i].innerHTML = "";

   }
  		
    	document.querySelector('.match').innerHTML = "";
    	document.querySelector('.scoreBoard').innerHTML = "Score: " + itsGood + "/" + attempt;
    	
    
};

var resetGame = function(){
  
   for(var i = 0; i < cards.length; i++){

		document.getElementsByClassName('card')[i].innerHTML = "";

   }
  		queenCounter=0;
    	kingCounter=0;
    	itsGood++;
    	document.querySelector('.match').innerHTML = "";
    	document.querySelector('.scoreBoard').innerHTML = "Score: " + itsGood + "/" + attempt;
    	createBoard();
    
};

var isTwoCards = function(){
  

  
  		if(this.getAttribute('data-card') === "king"){

 			this.innerHTML = '<img src="kingSpades.png" alt="King of Spades" />';
 				

		}else{

			this.innerHTML = '<img src="queenSpades.png" alt="Queen of Spades" />';
        	
        }
       		this.querySelector('img').className = 'img';

			cardsInPlay.push(this.getAttribute('data-card'));
        	
		
		if(cardsInPlay.length === 2){

			isMatch(cardsInPlay);

			cardsInPlay = [];


		}


};



createBoard();












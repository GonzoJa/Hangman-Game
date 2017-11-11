
 	
 
var wrongGuess = [];
var guessLeft = 7;
var wins = 0;
var losses = 0;
var wordLib = ["wolf", "lion", "bear", "fox", "tiger","panther"];
var chooseWord = "";
var displayWordArray = [];
var displayWord= "";
var splitWord= [];



console.log(wordLib);
console.log("wolf");
console.log(wordLib[3]); //we are calling the index in our array .... 
console.log(wordLib.length);
console.log(chooseWord);
 

function startGame() {
	//
    chooseWord = wordLib[Math.floor(Math.random() * wordLib.length)]; //we are going to select a random item from our array ..
    console.log("Guess this  word! "+chooseWord);	
  	splitWord = chooseWord.split("");
    for(var i = 0; i <splitWord.length; i++){
   		 displayWordArray.push("_");
   		 displayWord = displayWord + "_ ";
   		 document.write("Guess this word!");
   		var blanks = splitWord.map(a=>'_');

	}
	var dashesDiv = document.getElementById("dashes");
	dashesDiv.innerHTML = displayWord;
	console.log(displayWord);
}


document.onkeyup =function(event){  //this line allows the user to press a key.
	//console.log(event);
	//var userGuess = event.key;
	var userGuess2 = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Players guess!" + userGuess2);
	if (splitWord.indexOf(userGuess2) != userGuess2 ) {  //  if the split word or letter gets the index()
   alert("guess again");
  } else {
   	alert("nice");
   
}







//function for comparing users answers.

 function comparedLetter() {
	var letterInWord = false;
	for(var i = 0; i <displayWord.length; i++){
		if (splitWord.indexOf(u) == userGuess2){ 	
				alert("nice!");
 		}
 	}
 }
}

//starts game

startGame();





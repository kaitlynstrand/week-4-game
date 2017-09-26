$(document).ready(function() {

//define variable that generates random number when game starts/resets (19-120)	
var randomNum = Math.floor(Math.random()*120) + 1

//putting the generated random number on the randomNum in html (what is different between text and append here?)
$("#randomTotal").text(randomNum);

//need to assign random number 1-12 to four variables (gems) need to link to buttons
var blue = Math.floor(Math.random()*12) + 1
var green =Math.floor(Math.random()*12) + 1
var pink = Math.floor(Math.random()*12) + 1
var yellow = Math.floor(Math.random()*12) + 1

//assign original value on window refresh for userTotal, wins, losses
var userAddedTotal = 0
var wins = 0
var losses = 0

//why do I not need to do this for userAddedNum?
//attaching wins and losses to the assigned id's in html file
$("#numWins").text(wins);
$("#numLosses").text(losses);

//.on("click") needs to recognize: what button was clicked? 
//what value was assigned to that button?
//add that value to current (=+) userTotal
//check if userTotal > resultTotal

//three functions
//good: after onclick adds userAddedNum to userTotal and if = then +=1 win and regenerate new random number 
function good() {
	alert("Get that Bling, Girl!");
	$("#numWins").text(wins);
	wins += 1;
	reset();
}

//bad: add randomNum generated to userAddedNum if > 
function bad() {
	alert("Yo, Protect your Bling!");
	$("#numLosses").text(losses);
	losses += 1;
	reset();
}

//reset userAddedNum = 0; trigger reset for generated number; reassign random numbers to gems
function reset() {
generator=Math.floor(Math.random()*120) + 1;
$("randomTotal").text(randomNum);

var blue = Math.floor(Math.random()*12) + 1
var green = Math.floor(Math.random()*12) + 1
var pink = Math.floor(Math.random()*12) + 1
var yellow = Math.floor(Math.random()*12) + 1
userAddedTotal = 0
$("#userAddedFinal").text(userAddedTotal);

}

$("#bluegem").on("click", function() {
	userAddedTotal = userAddedTotal + blue;
	$("#userAddedFinal").text(userAddedTotal);
	if (userTotal == Random){
          good();
        }
        else if ( userTotal > Random){
          bad();
        }   
});

$("#greengem").on("click", function() {
	userAddedTotal = userAddedTotal + green;
	$("#userAddedFinal").text(userAddedTotal);
	if (userTotal == Random){
          good();
        }
        else if ( userTotal > Random){
          bad();
        }   
});

$("#pinkgem").on("click", function() {
	userAddedTotal = userAddedTotal + pink;
	$("#userAddedFinal").text(userAddedTotal);
	if (userTotal == Random){
          good();
        }
        else if ( userTotal > Random){
          bad();
        }   
});

$("#yellowgem").on("click", function() {
	userAddedTotal = userAddedTotal + yellow;
	$("#userAddedFinal").text(userAddedTotal);
	if (userTotal == Random){
          good();
        }
        else if ( userTotal > Random){
          bad();
        }   

});
})
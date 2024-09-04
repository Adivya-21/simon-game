var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
function nextSequence(){
    var randomNumber = ((Math.floor(Math.random()*4)));  
    var randomChoosenColors = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColors);
        

$("#" + randomChoosenColors).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChoosenColors + ".mp3");
audio.play();
}
$("." + btn).click(function(e){
    var userChoosenColor = e.target.id;
    userClickedPattern.push(userChoosenColor);
});
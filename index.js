var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice " + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice " + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImage2);

var audio = new Audio('dice.mp3');
audio.play();



if(randomNumber1 > randomNumber2){
    document.querySelectorAll("p")[0].innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelectorAll("p")[0].innerHTML = "Player 2 wins";
}
else{
    document.querySelectorAll("p")[0].innerHTML = "Draw!";
}
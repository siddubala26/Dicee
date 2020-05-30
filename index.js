var  randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var rdi = "dice"+randomNumber1+".png";

var ris = "images/"+rdi;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", ris);


var  randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var ris2 = "images/dice"+randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",ris2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Refresh Me";
}

var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;//1-6

var diceRandomImg="dice" + randomNumber1 + ".png";//dice1.png-dice6.png

var randomImageSource="images/" + diceRandomImg;

var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSource);

var randomNUmber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice" + randomNUmber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if (randomNumber1 > randomNUmber2){
  document.querySelector("h1").innerHTML="🚩 Player one Wins! 🚩";
}

else if (randomNUmber2 > randomNumber1){
  document.querySelector("h1").innerHTML="🚩 Player Second Wins! 🚩";
}

else if(randomNumber1 === randomNUmber2){
  document.querySelector("h1").innerHTML="🤪 OOP's Match is Draw 🤪";
}

else{
  alert("Something Worng ");
}

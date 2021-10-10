function randomNumber() {
   var player1 = Math.floor(Math.random() * 6 + 1);
   var player2 = Math.floor(Math.random() * 6 + 1);
   document.querySelector(".img1").src="images/dice" + player1 + ".png";
   document.querySelector(".img2").src="images/dice" + player2 + ".png";
   if(player1 > player2) {
      document.querySelector("h1").innerHTML = "🎉 Player 1 WON"
   } else if(player1 === player2) {
      document.querySelector("h1").innerHTML = "🤞It's a DRAW🤞"
   } else {
      document.querySelector("h1").innerHTML = "Player 2 WON 🎉"
   }
}
randomNumber();

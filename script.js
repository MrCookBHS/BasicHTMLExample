// Keeping track of the number of total clicks
var count = 0;

// Getting the screen elements in variables
var countButton = document.getElementById("countButton");
var counterLabel = document.getElementById("counterLabel");
var winLabel = document.getElementById("winLabel");
var myImage = document.getElementById("goodJobImage");

// OnEvent for the button
countButton.onclick = function() {
  console.log("You pressed the button");
  myImage.style.display = "block"; // Makes the image appear
  count++;
  counterLabel.innerHTML = "Total count: " + count;
  if(count==5) {
    winLabel.innerHTML = "I'm inside.";
  }
  if(count==10) {
    winLabel.innerHTML = "Turn around.";
    winLabel.style.color = "red";
   
  }
}

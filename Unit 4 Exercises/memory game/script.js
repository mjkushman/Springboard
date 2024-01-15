const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // add index as id
    let id = Math.random()
    newDiv.id  =id

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


let colorsPicked = []
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.event);
  
  if(!colorsPicked[0]){
    
    colorsPicked.push(event.target)
    // console.log('colorsPicked',colorsPicked)

    colorsPicked[0].style.backgroundColor= event.target.classList[0]

  } else if(!colorsPicked[1] && (event.target.id != colorsPicked[0].id)){ // makes sure the click is on a different one
    // show color

    colorsPicked.push(event.target) // add element to the picked array
    colorsPicked[1].style.backgroundColor= event.target.classList[0]
    

    // Check to see if they match
    if(colorsPicked[0].className == colorsPicked[1].className){
      // do something if match
      console.log('MATCH!')
      colorsPicked = [] // clear the array
    } else {
      // do something if not a match

      
      setTimeout( ()=> {
        
      colorsPicked.map(color => {color.style.backgroundColor=''})
      colorsPicked = [] // clear the array

    } ,1000)


    // console.log('colorsPicked',colorsPicked) 
  }
}
}
// when the DOM loads
createDivsForColors(shuffledColors);

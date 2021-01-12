//Exercise 1

//Selectors
const button = document.querySelector("button");

//Event Listener
button.addEventListener("click", changeBackground);

//Function
function changeBackground() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

changeBackground();
//This to display the innerHTML of random color generated.

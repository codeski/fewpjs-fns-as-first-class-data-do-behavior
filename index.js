/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const decimal = (time.split(":").join("."))
  const integer = parseInt(decimal)
  if (time === "") {
    return "'TEST'"
  } else if (integer < 12) {
    return "Good Morning"
  } else if (integer < 17) {
    return "Good Afternoon"
  } else if (integer > 17) {
    return "Good Evening"
  } else if (time) {return `'${time}'`}
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const addToGreeting = document.getElementById('greeting')
  addToGreeting.innerHTML = string
}
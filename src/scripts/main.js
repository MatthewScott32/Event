let outputBox1 = document.getElementById("first-article") //variable that grabs left box to take input text
let outputBox2 = document.getElementById("second-article")  // variable that grabs right box to take input text
let getTextInput = document.getElementById("message")  //variable that grabs the input box

getTextInput.addEventListener("keyup", event => {
  outputBox1.innerHTML = event.target.value;
  outputBox2.innerHTML = event.target.value;
})
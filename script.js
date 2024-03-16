const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

document.getElementById("check-btn").addEventListener("click", function () {
  const regex = /[^a-zA-Z0-9]+/g;
  const textInput = input.value.replace(regex, "").toLowerCase();

  const textInputReversed = textInput.split("").reverse().join("");

  if (input.value === "") {
    alert("Please input a value");
  } else if (textInputReversed === textInput) {
    result.innerHTML = `${input.value} is a palindrome`;
    document.querySelector("body").style.backgroundColor = "#00CED1";
  } else {
    result.innerHTML = `${input.value} is not a palindrome`;
    document.querySelector("body").style.backgroundColor = "#8b008b";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  result.innerHTML = "Enter in text to check for a palindrome:";
  document.querySelector("body").style.backgroundColor = "#222";
});

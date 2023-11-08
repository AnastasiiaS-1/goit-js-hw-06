const inputNameEl = document.querySelector("name-input");
const spanNameEl = document.querySelector("name-output");

inputNameEl.addEventListener("input", function() {
const inputText = inputNameEl.value;
  if (inputText.trim() === "") {
  spanNameEl.textContent = "Anonymous";
  } else {
  spanNameEl.textContent = inputText;


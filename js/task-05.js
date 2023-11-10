const inputNameEl = document.getElementById("name-input");
const spanNameEl = document.getElementById("name-output");

inputNameEl.addEventListener("input", function () {
  const inputText = inputNameEl.value;
  if (inputText.trim() === "") {
    spanNameEl.textContent = "Anonymous";
  } else {
    spanNameEl.textContent = inputText;
  }
});

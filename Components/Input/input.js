const chipDiv = document.querySelector(".chip-collection");
const chipText = document.getElementById("input-box");

function search(event) {
  if (event.key == "Enter" && chipText.value !== "") {
    var codeBlock =
      '<div class="chip">' +
      '<div class="chip-txt">' +
      chipText.value +
      "</div>" +
      '<button class="close-btn">' +
      "<span>" +
      "x" +
      "</span>" +
      "</button>" +
      "</div>";
    chipDiv.innerHTML += codeBlock;
    chipText.value = "";
  }
}
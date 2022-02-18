document
  .getElementById("btn-fav")
  .addEventListener("click", function clickHandler() {
    this.classList.toggle("btn-fav-clicked");
  });

const cartBtn = document.getElementById("cart-icon");
var addedToCart = false;
cartBtn.addEventListener("click", function clickHandler() {
  if (cartBtn.innerText !== "remove_shopping_cart") {
    cartBtn.innerText = "remove_shopping_cart";
  } else if (cartBtn.innerText === "remove_shopping_cart") {
    cartBtn.innerText = "add_shopping_cart";
  }
});

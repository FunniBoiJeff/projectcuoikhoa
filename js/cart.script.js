
import data from "./data.js";
const products = document.querySelector("tbody");
let cart = localStorage.getItem("cart");
if (!cart) {
  let data = [];
  localStorage.setItem("cart", JSON.stringify(data));
} else {
  cart = JSON.parse(cart);
  console.log(cart);
}

let counts = 1;
let total = 0;
cart.forEach((item) => {
  data.forEach((product) => {
    if (item == product.id) {
      products.innerHTML += `
    <tr>
      <th scope="row">${counts}</th>
      <td>${product.name}</td>
      <td>1</td>
      <td>${product.price}</td>
      <td>${product.price}</td>
    </tr>`
    counts = counts + 1
    total = total + product.price
    }
  })
});

let totalprice = document.querySelector("#total")
totalprice.innerHTML = total;

// function myCoolFunction() {
//   localStorage.clear();
//   alert("Dat hang thanh cong");
// };

const btnClick = document.querySelectorAll(".btn-click");

btnClick.forEach((item) => {
  item.addEventListener("click", () => {
    localStorage.clear();
    alert("Them vao gio hang thanh cong!");
  });
});

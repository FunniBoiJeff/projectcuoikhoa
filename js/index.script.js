import data from "./data.js";

const products = document.querySelector("#products");
let cart = localStorage.getItem("cart");
if (!cart) {
  let data = [];
  localStorage.setItem("cart", JSON.stringify(data));
} else {
  cart = JSON.parse(cart);
  console.log(cart);
  localStorage.clear();
}

data.forEach((item) => {
  products.innerHTML += `
    <div
        class="owl-item cloned active"
        style="width: 383.333px; margin-right: 10px"
    >
        <div class="post-slide">
        <div class="post-img">
            <div class="post-abs" style="background: #ddddddbf!important">
            <p style="color: #0000008f; justify-content: center; ">${item.desc}</p>
            </div>
            <img
            src="${item.image}"
            alt=""
            />
        </div>
        <h3 class="post-title">
            <a href="#">${item.name}</a>
        </h3>
        <p class="post-description">$${item.price}</p>
        <div style="display: flex; justify-content: center;">
            <button id="${item.id}" href="detail.html" style=" margin: 5px 0px" type="button" class="btn btn-warning btn-click">Add to cart</button>
        </div>

        </div>
    </div>`;
});

const btnClick = document.querySelectorAll(".btn-click");

btnClick.forEach((item) => {
  item.addEventListener("click", () => {
    cart.push(item.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Them vao gio hang thanh cong!");
  });
});

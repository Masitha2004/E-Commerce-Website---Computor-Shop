const products = [
  {
    id:1,
    name:"Smart Headphones",
    price:129,
    category:"Electronics",
    image:"images/p1.jpg",
    description:"Premium sound quality with noise cancellation and long battery life."
  },
  {
    id:2,
    name:"Gaming Mouse",
    price:59,
    category:"Accessories",
    image:"images/p2.jpg",
    description:"High precision gaming mouse with RGB lighting."
  },
  {
    id:3,
    name:"Smart Watch",
    price:199,
    category:"Wearables",
    image:"images/p3.jpg",
    description:"Track health, fitness, and notifications with style."
  }
];

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find product
const product = products.find(p => p.id === productId);

// Display product
if(product){
  document.getElementById("productDetail").innerHTML = `
    <div class="product-image">
      <img src="${product.image}">
    </div>

    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="category">${product.category}</p>
      <p class="price">$${product.price}</p>

      <p class="description">${product.description}</p>

      <div class="quantity">
        <label>Quantity</label>
        <input type="number" id="qty" value="1" min="1">
      </div>

      <button onclick="addToCart('${product.name}', ${product.price})">
        Add to Cart
      </button>
    </div>
  `;
}else{
  document.getElementById("productDetail").innerHTML = `
    <h2 style="color:red">Product not found</h2>
  `;
}
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

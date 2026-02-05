let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  const existing = cart.find(item => item.name === name);
  if(existing) existing.qty +=1;
  else cart.push({name, price, qty:1});
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartPage();
}

// Display cart items in card style
function loadCartPage(){
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if(!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index)=>{
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>Quantity: ${item.qty}</span>
        <span>Price: $${item.price * item.qty}</span>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    total += item.price * item.qty;
  });

  if(totalEl) totalEl.innerText = "Total: $" + total;
}

// Remove item from cart
function removeItem(index){
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartPage();
}

// Load cart on page load
loadCartPage();

let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach((product, index) => {
        total += product.price;
        let li = document.createElement("li");
        li.textContent = `${product.item} - ₹${product.price}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
}

function checkout() {
    if (cart.length > 0) {
        alert("Order placed successfully! 🎉 Thank you for shopping.");
        cart = [];
        updateCart();
    } else {
        alert("Your cart is empty!");
    }
}






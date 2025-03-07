<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart with Animation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .cart {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            width: 300px;
        }
        .cart-count {
            font-size: 20px;
            font-weight: bold;
            transition: transform 0.2s ease-in-out;
        }
        .cart-items {
            list-style-type: none;
            padding: 0;
        }
        .cart-items li {
            padding: 5px;
            transition: transform 0.3s ease-in-out;
        }
        .checkout-btn {
            margin-top: 10px;
            padding: 8px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
        }
        .shake {
            animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
    </style>
</head>
<body>

    <h2>Shopping Cart</h2>
    <button onclick="addToCart('Item 1', 100)">Add Item 1 - ₹100</button>
    <button onclick="addToCart('Item 2', 200)">Add Item 2 - ₹200</button>

    <div class="cart">
        <h3>Cart <span id="cart-count" class="cart-count">0</span></h3>
        <ul id="cart-items" class="cart-items"></ul>
        <p>Total: ₹<span id="cart-total">0</span></p>
        <button class="checkout-btn" onclick="checkout()">Checkout</button>
    </div>

    <script>
        let cart = [];

        function addToCart(item, price) {
            cart.push({ item, price });
            updateCart();

            // Add bounce effect when item is added
            let lastItem = document.querySelector(".cart-items li:last-child");
            if (lastItem) {
                lastItem.style.transform = "scale(1.1)";
                setTimeout(() => {
                    lastItem.style.transform = "scale(1)";
                }, 200);
            }
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
            let cartCount = document.getElementById("cart-count");
            cartCount.textContent = cart.length;

            // Scale up and down animation for cart count
            cartCount.style.transform = "scale(1.3)";
            setTimeout(() => {
                cartCount.style.transform = "scale(1)";
            }, 200);
        }

        function checkout() {
            if (cart.length > 0) {
                alert("Order placed successfully! 🎉 Thank you for shopping.");
                cart = [];
                updateCart();
            } else {
                let checkoutBtn = document.querySelector(".checkout-btn");
                checkoutBtn.classList.add("shake");
                setTimeout(() => {
                    checkoutBtn.classList.remove("shake");
                }, 300);
            }
        }
    </script>

</body>
</html>







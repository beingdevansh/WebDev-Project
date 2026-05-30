document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    const nav = document.querySelector(".navbar");

    const cartBox = document.createElement("div");

    cartBox.classList.add("cart-box");

    cartBox.innerHTML = `
        🛒 Cart: <span id="cart-count">0</span>
    `;

    cartBox.onclick = function () {
        window.location.href = "cart.html";
    };

    nav.appendChild(cartBox);

    const searchInput =
        document.querySelector(".search-box input");

    const products =
        document.querySelectorAll(".product");

    searchInput.addEventListener("keyup", function () {

        const value =
            searchInput.value.toLowerCase();

        products.forEach(product => {

            const name =
                product.querySelector(".pname")
                    .textContent
                    .toLowerCase();

            if (name.includes(value)) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }

        });

    });

    const cartButtons =
        document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", function () {

            const product =
                this.parentElement.parentElement;

            const productName =
                product.querySelector(".pname").innerText;

            const productPrice =
                parseFloat(
                    product.querySelector(".price")
                        .innerText
                        .replace("₹", "")
                        .replace(/,/g, "")
                );

            cart.push({
                name: productName,
                price: productPrice
            });

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            document.getElementById("cart-count")
                .innerText = cart.length;

            this.innerText = "Added ✓";

            setTimeout(() => {

                this.innerText = "Add to Cart";

            }, 1000);

        });

    });

});
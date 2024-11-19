document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length > 0) {
        emptyCartMessage.style.display = 'none';

        cartItems.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                </div>
                <button class="remove-item">Remove</button>
            `;

            cartContainer.appendChild(cartItem);

            // Add functionality to remove item
            cartItem.querySelector('.remove-item').addEventListener('click', () => {
                const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                cartItem.remove();

                if (updatedCartItems.length === 0) {
                    emptyCartMessage.style.display = 'block';
                }
            });
        });
    } else {
        emptyCartMessage.style.display = 'block';
    }
});

let total = 0;
let cartItems = {};

async function addToCart(productName, price) {
    const key = `${productName}_${price}`;
    if (cartItems.hasOwnProperty(key)) {
        cartItems[key].quantity++;
    } else {
        cartItems[key] = {
            price: price,
            quantity: 1
        };
    }
    total += price;
    document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-total').innerText) + 1;
    updateSelectedList();
    updateTotal();
	
}

function removeFromCart(productName, price) {
    const key = `${productName}_${price}`;
    if (cartItems.hasOwnProperty(key)) {
        const item = cartItems[key];
        total -= item.price;
        item.quantity--;
        if (item.quantity === 0) {
            delete cartItems[key];
        }
        document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-total').innerText) - 1;
        updateSelectedList();
        updateTotal();
    }
}

function updateSelectedList() {
    const selectedList = document.getElementById('selected-list');
    selectedList.innerHTML = '';
    for (const key in cartItems) {
        if (cartItems.hasOwnProperty(key)) {
            const item = cartItems[key];
            const listItem = document.createElement('li');
            listItem.textContent = `${key} (${item.quantity})`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeFromCart(key.split('_')[0], item.price);
            };
            listItem.appendChild(removeButton);
            selectedList.appendChild(listItem);
        }
    }
}

function updateTotal() {
    document.getElementById('total').innerText = total.toFixed(2);
}

function finalize() {
    alert(`Total Price: $${total.toFixed(2)}`);
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('cart-hidden');
}



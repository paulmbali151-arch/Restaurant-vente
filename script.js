// Panier dynamique simple avec localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({name: name, price: price, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " ajouté au panier !");
}

// Fonction pour afficher le panier sur panier.html
function displayCart() {
    const tbody = document.querySelector('#cart-body');
    const totalEl = document.querySelector('#cart-total');
    tbody.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${item.price * item.quantity}</td>
        `;
        tbody.appendChild(row);
        total += item.price * item.quantity;
    });
    totalEl.textContent = "Total: $" + total;
}

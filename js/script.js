/* MENU */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
});

/* SLIDER */
let index = 0;
const opinie = document.querySelectorAll('.opinia');

setInterval(() => {
    opinie[index].classList.remove('active');
    index = (index + 1) % opinie.length;
    opinie[index].classList.add('active');
}, 3000);

/* KOSZYK */

const buttons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartPanel = document.querySelector('.cart-panel');
const cartIcon = document.querySelector('.cart-icon');
const clearBtn = document.querySelector('.clear-cart');
const emptyText = document.querySelector('.empty');
const totalText = document.querySelector('.total');
const checkoutBtn = document.querySelector('.checkout');

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Otwieranie koszyka */
cartIcon.addEventListener('click', () => {
    cartPanel.classList.toggle('open');
});

/* Dodawanie produktu */
buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        const card = btn.closest('.card');
        const name = card.querySelector('h3').innerText;
        const price = Number(card.querySelector('.price').innerText);

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        saveCart();
    });
});

/* Zapis */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

/* Render */
function renderCart() {

    cartItemsList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyText.style.display = "block";
    } else {
        emptyText.style.display = "none";
    }

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} x${item.qty} - ${item.price * item.qty} zł
            <button data-index="${index}">❌</button>
        `;

        cartItemsList.appendChild(li);
    });

    totalText.innerText = "Suma: " + total + " zł";

    cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

    /* Usuwanie */
    document.querySelectorAll('.cart-items button').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.splice(btn.dataset.index, 1);
            saveCart();
        });
    });
}

/* Czyszczenie */
clearBtn.addEventListener('click', () => {
    cart = [];
    saveCart();
});

/* INIT */
renderCart();

/* FORM */
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    showToast("Wiadomość wysłana!", "success");

    e.target.reset(); // czyści formularz po wysłaniu
});

/* Zakup */
checkoutBtn.addEventListener('click', () => {

    if (cart.length === 0) {
        showToast("Koszyk jest pusty!", "error");
        return;
    }

    cart = [];
    saveCart();
    showToast("Zakupy przeszły pomyślnie!", "success");

    cartPanel.classList.remove('open');
});

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.className = ""; // reset klas
    toast.classList.add("show", type);

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
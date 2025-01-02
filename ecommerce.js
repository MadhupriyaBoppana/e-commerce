document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartButtons = document.querySelectorAll('.product button');

    cartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            alert(`${productName} added to the cart.`);
        });
    });
});

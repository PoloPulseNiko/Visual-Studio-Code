document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const addButtons = Array.from(document.querySelectorAll('.add-product'));
    const checkoutButton = document.querySelector('.checkout');
    const textarea = document.querySelector('textarea');

    const cart = {
        products: new Set(),
        totalPrice: 0,
    };

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product');
            const productName = productElement.querySelector('.product-title').textContent;
            const productPrice = parseFloat(productElement.querySelector('.product-line-price').textContent);

            cart.products.add(productName);
            cart.totalPrice += productPrice;

            textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    });

    checkoutButton.addEventListener('click', () => {
        const productList = Array.from(cart.products).join(', ');
        textarea.value += `You bought ${productList} for ${cart.totalPrice.toFixed(2)}.`;
        
        addButtons.forEach(button => button.disabled = true);
        checkoutButton.disabled = true;
    });
}

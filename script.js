
function calculateTotal() {
    const price = +document.getElementById('product-select').value;
    const quantity = +document.getElementById('quantity').value;
    const total = price * quantity;
    document.getElementById('order-total').textContent = total.toFixed(2);
}

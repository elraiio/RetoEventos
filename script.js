// Obtener todos los elementos 'a' dentro del menú
const menuItems = document.querySelectorAll('nav a');

// Agregar un evento 'mouseenter' a cada elemento del menú
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Cambiar el color de fondo al pasar el cursor
        item.style.backgroundColor = '#555';
    });

    // Agregar un evento 'mouseleave' para restaurar el estado original
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
    });
});

// Obtener todos los elementos con la clase 'product'
const productSections = document.querySelectorAll('.product');

// Iterar sobre cada sección de producto
productSections.forEach(section => {
    const originalSize = getComputedStyle(section).width;
    const enlargedSize = '400px';

    section.addEventListener('mouseenter', () => {
        section.style.width = enlargedSize;
    });

    section.addEventListener('mouseleave', () => {
        section.style.width = originalSize;
    });
});

//Agregar carrito
function addToCart(productName) {
    // Mostrar el producto agregado en la tarjeta verde
    const productAddedText = document.getElementById('product-added-text');
    productAddedText.textContent = `Producto agregado al carrito: ${productName}`;
    document.getElementById('product-added').style.display = 'block';
}

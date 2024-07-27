function buscarProducto(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        const nombre = producto.getAttribute('data-nombre');
        if (nombre.includes(query)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

function comprarProducto(nombre) {
    alert(`Has agregado "${nombre}" a tu carrito de compras.`);
}

function enviarMensaje(event) {
    event.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
    
    // Aquí puedes enviar el mensaje a tu servidor o API
    console.log('Mensaje enviado:', {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    });

    alert('Gracias por tu mensaje, te contactaremos pronto.');
    document.querySelector('#contacto form').reset();
}

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio, cantidad: 1 };
    carrito.push(producto);
    alert(`Has agregado "${nombre}" a tu carrito de compras.`);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoTable = document.querySelector('#carrito-table tbody');
    carritoTable.innerHTML = '';
    let total = 0;
    carrito.forEach((producto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>$${(producto.precio * producto.cantidad).toFixed(2)}</td>
        `;
        carritoTable.appendChild(row);
        total += producto.precio * producto.cantidad;
    });
    document.getElementById('total-carrito').textContent = total.toFixed(2);
}

function procederAlPago() {
    window.location.href = 'checkout.html';
}

function procesarPago(event) {
    event.preventDefault();
    alert('Pago procesado exitosamente. Gracias por tu compra.');
    carrito = [];
    actualizarCarrito();
    window.location.href = 'index.html';
}
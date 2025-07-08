// Declaración de variables y arrays
const productos = [
  { id: 1, nombre: "Camiseta", precio: 5000 },
  { id: 2, nombre: "Gorra", precio: 3000 },
  { id: 3, nombre: "Mochila", precio: 10000 }
];

let carrito = [];

// Función para mostrar productos
function mostrarProductos() {
  let mensaje = "Productos disponibles:\n";
  productos.forEach(prod => {
    mensaje += `${prod.id} - ${prod.nombre} ($${prod.precio})\n`;
  });
  alert(mensaje);
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
  let seleccion = parseInt(prompt("¿Qué producto querés comprar? Ingresá el número (1, 2 o 3)"));
  const producto = productos.find(p => p.id === seleccion);

  if (producto) {
    let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} querés?`));
    if (!isNaN(cantidad) && cantidad > 0) {
      carrito.push({ ...producto, cantidad });
      alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
    } else {
      alert("Cantidad inválida. Intenta de nuevo.");
    }
  } else {
    alert("Producto no válido.");
  }
}

// Función para mostrar resumen de compra
function mostrarResumen() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let total = 0;
  let resumen = "Resumen de tu compra:\n";
  carrito.forEach(item => {
    let subtotal = item.precio * item.cantidad;
    total += subtotal;
    resumen += `${item.nombre} x${item.cantidad} = $${subtotal}\n`;
  });
  resumen += `\nTOTAL A PAGAR: $${total}`;
  alert(resumen);
  console.log(resumen);
}

// Función principal del simulador
function iniciarSimulador() {
  alert("¡Bienvenido al simulador de compras!");
  let continuar = true;

  while (continuar) {
    mostrarProductos();
    agregarAlCarrito();
    continuar = confirm("¿Querés agregar otro producto?");
  }

  mostrarResumen();
}

// Llamada a la función principal
iniciarSimulador();

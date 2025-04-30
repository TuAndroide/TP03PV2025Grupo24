// Adicional.jsx
import { useEffect } from "react";

// Lista original de productos, con descripción y precio
const productosOriginales = [
  { descripcion: "Teclado", precio: 30000 },
  { descripcion: "Auriculares", precio: 49000 },
  { descripcion: "Mouse", precio: 15000 },
  { descripcion: "Monitor", precio: 120000 },
  { descripcion: "Webcam", precio: 25000 },
];

function Adicional() {
  useEffect(() => {
    console.clear(); // Limpia la consola cada vez que se monta el componente

    // Creamos una copia del array original para evitar modificarlo directamente
    let productos = [...productosOriginales];

    console.log("1 - Lista de productos:");
    productos.forEach((p) =>
      console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`)
    );

    // Filtramos los productos cuyo precio sea mayor a 20 (en la práctica, todos lo son)
    console.log(`\n2 - Productos con precio mayor a $20:`);
    const productosFiltrados = productos.filter((p) => p.precio > 20);
    console.log(productosFiltrados);

    // Calculamos el precio con IVA (21%) para cada producto
    console.log(`\n3 - Productos con precio + IVA (21%):`);
    const productosConIVA = productos.map((p) => ({
      descripcion: p.descripcion,
      precio: (p.precio * 1.21),
    }));
    console.log(productosConIVA);

    // Ordenamos los productos de menor a mayor según el precio
    const ordenarPorPrecioMayorMenor = productos.sort(
      (a, b) => a.precio - b.precio
    );
    console.log(`\n4 - Productos ordenados por precio de menor a mayor:`);
    console.log(ordenarPorPrecioMayorMenor);

    // Agregamos un nuevo producto al final del array
    const nuevoProducto = {
      descripcion: "Parlante Bluetooth",
      precio: 59000.90,
    };
    const nuevoArray = [...ordenarPorPrecioMayorMenor];
    nuevoArray.push(nuevoProducto);
    console.log(`\n5 - Producto agregado:`);
    console.log(nuevoArray);

    // Buscamos el precio más bajo en el nuevo array
    const precioMasBajo = Math.min(...nuevoArray.map((p) => p.precio));
    console.log("\nPrecio más bajo encontrado:", precioMasBajo);

    // Eliminamos todos los productos que tengan ese precio más bajo
    const productosSinMasBaratos = nuevoArray.filter(
      (p) => p.precio !== precioMasBajo
    );
    console.log("\nLista sin el producto con el precio más bajo:");
    console.log(productosSinMasBaratos);

  }, []); // Solo se ejecuta una vez al montar el componente
};

export default Adicional;
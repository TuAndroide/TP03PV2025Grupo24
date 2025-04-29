// App.jsx
import { useEffect } from 'react';
import productosOriginales from './productos.js';

function App() {
  useEffect(() => {
    console.clear();9

    // Copiamos el array original para no modificarlo directamente
    let productos = [...productosOriginales];

    console.log("1 - Lista de productos:");
    productos.forEach(p =>
      console.log( `Producto: ${p.descripcion} - Precio: $${p.precio}`)
    );

    console.log(`\n2 - Productos con precio mayor a $20:`);
    const productosFiltrados = productos.filter(p => p.precio > 20);
    console.log(productosFiltrados);

    console.log(`\n3 - Productos con precio + IVA (21%):`);
    const productosConIVA = productos.map(p => ({
      descripcion: p.descripcion,
      precio: (p.precio * 1.21).toFixed(2)
    }));
    console.log(productosConIVA);
  }, []);

    return (
      <div>
        <h1>Ver consola para los resultados</h1>
      </div>
    );
}
  export default App;


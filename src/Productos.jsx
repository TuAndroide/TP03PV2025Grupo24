import React, { useState } from 'react';

const Productos = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosMostrados, setProductosMostrados] = useState([]);

  const agregarProducto = () => {
    if (!nombre || isNaN(precio)) return;
    const nuevoProducto = { id: Date.now(), nombre, precio: parseFloat(precio) };
   
    const nuevosProductos = [...productos, nuevoProducto];
    setProductos(nuevosProductos);
    setProductosMostrados(nuevosProductos);
    setNombre('');
    setPrecio('');
  };

  const filtrarProductos = () => {
    const filtrados = productos.filter(p => p.precio > 20);
    setProductosMostrados(filtrados);
  };

  const agregarIVA = () => {
    const conIVA = productos.map(p => ({
      ...p,
      precio: +(p.precio * 1.21).toFixed(2),
    }));
    setProductosMostrados(conIVA);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '60px'}}>
      <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
      <button onClick={agregarProducto}>Agregar Producto</button>

      <div style={{ marginTop: '10px' }}>
        <button onClick={filtrarProductos}>Filtrar</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={agregarIVA}>Agregar IVA</button>
      </div>

      <h3>Productos Agregados:</h3>
      <ul style={{listStyle:'none', padding: 0,marginTop: '20px'}}>
        {productosMostrados.map((p) => (
            <li key={p.id} style={{marginBottom: '10px', padding: '10px'}}>
            {p.nombre} - ${p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
   
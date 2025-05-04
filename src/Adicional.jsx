import React, { useState } from "react";
import "./styles/Adicional.css";

const Productos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [productosMostrados, setProductosMostrados] = useState([]);

  const agregarProducto = () => {
    if (!nombre || isNaN(precio)) return;
    const nuevoProducto = {
      id: Date.now(),
      nombre,
      precio: parseFloat(precio),
      tieneIVA: false,
    };

    const nuevosProductos = [...productosMostrados, nuevoProducto];
    setProductosMostrados(nuevosProductos);
    setNombre("");
    setPrecio("");
  };

  const filtrarProductos = () => {
    const filtrados = productosMostrados.filter((p) => p.precio > 20);
    setProductosMostrados(filtrados);
  };

  const agregarIVA = () => {
    const conIVA = productosMostrados.map((p) => {
      if (p.tieneIVA) {
        return p;
      } else {
        return {
          ...p,
          precio: +(p.precio * 1.21).toFixed(2),
          tieneIVA: true,
        };
      }
    });

    setProductosMostrados(conIVA);
  };

  const ordenarPorPrecioMenorMayor = () => {
    const ordenados = [...productosMostrados].sort(
      (a, b) => a.precio - b.precio
    );
    setProductosMostrados(ordenados);
  };

  const quitarMasBajo = () => {
    const precioMasBajo = Math.min(...productosMostrados.map((p) => p.precio));
    const productosSinMasBajo = productosMostrados.filter(
      (p) => p.precio !== precioMasBajo
    );
    setProductosMostrados(productosSinMasBajo);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "60px" }}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar Producto</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={filtrarProductos}>Filtrar</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={agregarIVA}>Agregar IVA</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={ordenarPorPrecioMenorMayor}>Ordenar Por Precio</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={quitarMasBajo}>Eliminar Mas Barato</button>
      </div>

      <h3>Productos Agregados:</h3>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosMostrados.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;

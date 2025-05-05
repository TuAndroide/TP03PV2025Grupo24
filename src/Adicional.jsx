import React, { useState, useEffect } from "react";
import "./styles/Adicional.css";

const Productos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [productosMostrados, setProductosMostrados] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(true); // Nuevo estado para controlar el filtro
  const [productosOriginales, setProductosOriginales] = useState([]); // Nuevo estado para guardar la lista original
  const [ivaAplicado, setIvaAplicado] = useState(false); // Nuevo estado para controlar si el IVA está aplicado

  // Este useEffect se ejecuta cuando productosMostrados cambia
  useEffect(() => {
    if (mostrarTodos) {
      setProductosOriginales([...productosMostrados]);
    }
  }, [mostrarTodos, productosMostrados]);

  const agregarProducto = () => {
    if (!nombre || !precio || isNaN(parseFloat(precio))) {
      alert("Por favor, ingrese un nombre y un precio válido para el producto.");
      return;
    }
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
    if (mostrarTodos) {
      // Si se están mostrando todos, filtrar los productos
      const filtrados = productosMostrados.filter((p) => p.precio > 20);
      setProductosMostrados(filtrados);
    } else {
      // Si se están mostrando los filtrados, volver a mostrar todos
      setProductosMostrados(productosOriginales);
    }
    setMostrarTodos(!mostrarTodos); // Cambiar el estado para la próxima vez
  };

  const toggleIVA = () => { // Cambiamos el nombre de la función
    const nuevosProductos = productosMostrados.map((p) => {
      if (ivaAplicado) { // Si el IVA ya está aplicado, lo quitamos
        return {
          ...p,
          precio: p.tieneIVA ? +(p.precio / 1.21).toFixed(2) : p.precio, //Revertimos el precio
          tieneIVA: false,
        };
      } else { // Si el IVA no está aplicado, lo agregamos
         return {
          ...p,
          precio: !p.tieneIVA ? +(p.precio * 1.21).toFixed(2) : p.precio,
          tieneIVA: true,
        };
      }
    });
    setProductosMostrados(nuevosProductos);
    setIvaAplicado(!ivaAplicado); // Actualizamos el estado del IVA
  };

  const ordenarPorPrecioMenorMayor = () => {
    const ordenados = [...productosMostrados].sort((a, b) => a.precio - b.precio);
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
    <div className="productos-container">
      <h3>Agregar Productos:</h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input-producto"
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="input-producto"
        />
      </div>
      <div className="botones-productos">
        <button className="producto-boton" onClick={agregarProducto}>
          Agregar Producto
        </button>
        <button className="producto-boton" onClick={filtrarProductos}>
          {mostrarTodos ? "Filtrar" : "Mostrar Todos"}
        </button>
        <button className="producto-boton" onClick={toggleIVA}> {/* Usamos la nueva función */}
          {ivaAplicado ? "Quitar IVA" : "Agregar IVA"}
        </button>
        <button className="producto-boton" onClick={ordenarPorPrecioMenorMayor}>
          Ordenar Por Precio
        </button>
        <button className="producto-boton" onClick={quitarMasBajo}>
          Eliminar Mas Barato
        </button>
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

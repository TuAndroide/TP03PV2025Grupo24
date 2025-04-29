import React, { useState } from 'react';
import '../styles/TaskInput.css'; // Crear el css con este nombre

function TaskInput({ onAgregarTarea }) {
  // Estados para manejar la nueva tarea que se está escribiendo
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Funcion para actualizar el estado cuando el usuario escriba en el input
  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea();
  };

  const agregarTarea = () => {
    // Verificar que la nueva tarea no este vacia
    if (nuevaTarea.trim() !== '') {
      // Llamamos a la funcion que nos pasaron para agregar la tarea
      onAgregarTarea(nuevaTarea);
      //Limpia el campo de entrada
      setNuevaTarea('');
    }
    //Mostrar un mensaje si la tarea está vacia
    else {
      alert('Por favor, ingresa una tarea.');
    }
  };

  return (
    <form id='formularioNuevaTarea' onSubmit={handleSubmit}>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
        placeholder='Nueva Tarea'
        id='inputNuevaTarea'
      />
      <button id='botonAgregarTarea' type="submit">Agregar</button>
    </form>
  );
}

export default TaskInput;
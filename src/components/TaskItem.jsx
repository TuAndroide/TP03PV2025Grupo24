import React from 'react';
import '../styles/TaskItem.css'; // Crear el css con este nombre

function TaskItem({ tarea, index, onMarcarCompletada, onEliminarTarea }) {
  return (
    <li
      key={index}
      className='tarea-items'
      style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
    >
      <span className="texto-tarea">{tarea.texto}</span>
      <button className='boton-completar' onClick={() => onMarcarCompletada(index)}>
        {tarea.completada ? 'Desmarcar' : 'Completar'}
      </button>
      <button className='boton-eliminar' onClick={() => onEliminarTarea(index)}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
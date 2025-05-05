import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ tarea, index, onMarcarCompletada, onEliminarTarea }) {
  return (
    <li className='tarea-items' key={index}>
      <span
        className="texto-tarea"
        style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }} //si la tarea se marca como completada, se tacha
      >
        {tarea.texto} {/*la tarea aparece*/}
      </span>
      <div className='botones-tarea'>
        <button className='boton-completar' onClick={() => onMarcarCompletada(index)}>
          {tarea.completada ? 'Desmarcar' : 'Completar'} {/* Muestra Desmarcar si esta completada, Completar si no */}
        </button>
        <button className='boton-eliminar' onClick={() => onEliminarTarea(index)}>
          Eliminar 
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
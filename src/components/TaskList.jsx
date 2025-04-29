import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css'; // Crear el css con este nombre

function TaskList({ tareas, onMarcarCompletada, onEliminarTarea }) {
  return (
    <ul id='listaTareas'>
      {tareas.map((tarea, index) => (
        //Esta lista añade las tareas que son añadidas en el prompt, asi como los botones para eliminar y para marcar como completada
        <TaskItem
          key={index}
          tarea={tarea}
          index={index}
          onMarcarCompletada={onMarcarCompletada}
          onEliminarTarea={onEliminarTarea}
        />
      ))}
    </ul>
  );
}

export default TaskList;
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  // Estados para manejar las tareas y la nueva tarea que se está escribiendo
  const [tareas, setTareas] = useState([]);

  const agregarNuevaTarea = (texto) => {
    // Crear un nuevo objeto de tarea
    const nuevaTareaObjeto = {
      texto: texto,
      completada: false // Inicialmente, la tarea no está completada
    };
    // Actualizar el estado 'tareas' añadiendo la nueva tarea
    // No modificamos directamente el estado, sino que creamos una nueva copia
    setTareas([...tareas, nuevaTareaObjeto]);
  };

  const eliminarTarea = (index) => {
    //crear una copia del array 'tareas'
    const nuevasTareas = [...tareas];
    //Eliminar la tarea en el índice especificado
    nuevasTareas.splice(index, 1);
    //Actualizamos el estado 'tareas' con el nuevo array sin la tarea eliminada
    setTareas(nuevasTareas);
  };

  const marcarCompletada = (index) => {
    //Crear una copia del array 'tareas' usando map para no modificar el original
    const nuevasTareas = tareas.map((tarea, i) => {
      //Verificamos si el indice actual coincide con el indice de la tarea a actualizar
      if (i === index) {
        //Creamos un nuevo objeto de tarea con la propiedad 'completada'
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    //Actualizamos el estado 'tareas' con el nuevo array
    setTareas(nuevasTareas);
  };

  return (
    <div id='listaDeTareasContainer'>
      <h1 id='tituloListaDeTareas'>Ingrese una tarea</h1>
      {/* Formulario para agregar nuevas tareas */}
      <TaskInput onAgregarTarea={agregarNuevaTarea} />
      {/* Renderiza la lista de tareas */}
      <TaskList
        tareas={tareas}
        onMarcarCompletada={marcarCompletada}
        onEliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
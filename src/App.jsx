import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function Prompt() {
  // Estados para manejar las tareas y la nueva tarea que se está escribiendo
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Funcion para actualizar el estado cuando el usuario escriba en el input
  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const agregarTarea = () => {
    // Verificar que la nueva tarea no esté vacía
    if (nuevaTarea.trim() !== '') {
      // Crear un nuevo objeto de tarea
      const nuevaTareaObjeto = {
        texto: nuevaTarea,
        completada: false // Inicialmente, la tarea no está completada
      };

      // Actualizar el estado 'tareas' añadiendo la nueva tarea
      // No modificamos directamente el estado, sino que creamos una nueva copia
      setTareas([...tareas, nuevaTareaObjeto]);

      //Limpiar el campo de entrada
      setNuevaTarea('');
    }
    //Mostrar un mensaje si la tarea está vacía
    else {
      alert('Por favor, ingresa una tarea.');
    }
  };

  const eliminarTarea = (index) => {
    //crear una copia del array 'tareas'
    const nuevasTareas = [...tareas];

    //Eliminar la tarea en el índice especificado
    nuevasTareas.splice(index, 1);

    //Actualizamos el estado 'tareas' con el nuevo array sin la tarea eliminada
    setTareas(nuevasTareas)
  };

  const marcarCompletada = (index) => {
    //Crear una copia del array 'tareas' usando map para no modificar el original
    const nuevasTareas = tareas.map((tarea, i) => {
      //Verificamos si el indice actual coincide con el indice de la tarea a actualizar
      if (i == index) {
        //Creamos un nuevo objeto de tarea con la propiedad 'completada'
        return { ...tarea, completada: !tarea.completada};
      }
      return tarea;
    });
    //Actualizamos el estado 'tareas' con el nuevo array
    setTareas(nuevasTareas);
  };

  return (
    <div id='listaDeTareasContainer'>
      <h1 id='tituloListaDeTareas'>Ingrese una tarea</h1>
      <form id='formularioNuevaTarea' onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text" 
        value = {nuevaTarea}
        onChange={handleInputChange}
        placeholder='Nueva Tarea' 
        id='inputNuevaTarea'/>
        <button id='botonAgregarTarea' onClick={agregarTarea}>Agregar</button>
      </form>
      <ul id='listaTareas'>
        {tareas.map((tarea, index) => (
          //Esta lista añade las tareas que son añadidas en el prompt, asi como los botones para eliminar y para marcar como completada
          <li key={index} className='tarea-items' style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <span className="texto-tarea">{tarea.texto}</span> 

      
            <button className='boton-completar' onClick={() => marcarCompletada(index)}>
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
      
            <button className='boton-eliminar' onClick={() => eliminarTarea(index)}>Eliminar</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Prompt



















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


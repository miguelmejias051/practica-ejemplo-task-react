import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';  // Importación arreglo de datos

// Nombre del context, constante que almacena los datos
export const TaskContext = createContext()

// Componente que va a englobar a todos los componentes
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
      }, []);
    
    // Función creacion tarea
    function createTask(task) {
        {/* Aquí nos permitimos crear un nuevo arreglo importando todos los datos del arreglo existente en data, para agregarle nuevos items*/}
        setTasks([
          ...tasks,
          {
            title: task.title,
            id: tasks.length,
            description: task.description
          }])
      }
    
      // Función elimina tarea
      function deleteTask(taskId){
        // Recorre todos las tareas del arreglo Task y por cada elemento verifica si el id proporcionado es diferente al id recorrido, obteniendo valor "verdarero" cada vez q esta condición se cumpla, al momento que ambos id sean iguales la condición sea "falsa" elimine el item donde los id sean iguales
        setTasks(tasks.filter(task => task.id !== taskId))
      }

  return(
    // Creación del componente TaskContext
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask    
    }}>{/* Elementos hijos */}
      {props.children}
    </TaskContext.Provider>
  )
}



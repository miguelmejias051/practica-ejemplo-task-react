import { useContext } from 'react';
import {TaskContext} from '../context/TaskContext';

// Inicio de componente TaskCard
function TaskCard({ task }) {
  
  
  // Función para mostrar un mensaje de alerta al momento de hacer clic en el botón Eliminar Tarea
  function mostrarAlerta(){
    alert(task.id)
  }

  const {deleteTask} = useContext(TaskContext)
  
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      {/*  */}
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      
      {/* Botón eliminar, permite efectuar la acción de eliminar todo un renglon del arreglo (titulo y descripción) */}
      <button onClick={() => deleteTask(task.id)}
      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-4 sm:w-auto"
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;

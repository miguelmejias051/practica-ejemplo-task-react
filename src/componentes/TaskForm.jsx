import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Inicio de componente Formulario App
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  // Constante e, que permite capturar un evento con los datos intruducidos manualmente
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creación de datos como una estructura para el nuevo arreglo
    createTask({
      title,
      description,
    });

    // Limpieza de datos para los campos de edición
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4 rounded-md">
        {/* Campo de entrada de datos, captura el texto a introducir como titulo de la nueva tarea */}
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 w-full mb-2"
          autoFocus
        />

        {/* Cuadro de texto, captura el texto a introducir como descipción de la nueva tarea */}
        <textarea
          placeholder="Escribe la descripción de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 w-full mb-2"
          value={description}
        ></textarea>

        {/* Botón Guardad, permite hacer submit, envía los textos capturados como nuevo elemento del arreglo */}
        <button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto shadow-sm ring-1 ring-inset ring-gray-300">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

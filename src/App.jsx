import TaskList from "./componentes/TaskList"; // Importación componente lista de tareas
import TaskForm from "./componentes/TaskForm"; // Importación componente formulario

// Inicio de componente App
function App() {
  return (
    <main className="bg-gray-500 h-screen bg-opacity-75 transition-opacity">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

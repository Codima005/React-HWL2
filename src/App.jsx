import "./App.css";
import { TodoList } from "./components/ToDoList";

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <h1>TO DO LIST</h1>
      </header>
      
    <TodoList />
  
   </div>
  );
}

export default App;

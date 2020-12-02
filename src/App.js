import './App.css';
import TodoList from './components/TodoList';
import Timer from './components/Timer';

function App() {
  return (
    <>
      <div className="todoApp">
        <h1>Todo App</h1>
        <TodoList />
      </div>
      <Timer />
    </>
  );
}

export default App;
